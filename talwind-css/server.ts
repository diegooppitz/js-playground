

import * as http from 'http';
import WebSocket from 'ws';
import fs from 'fs';
import express, { Express } from 'express';
import chokidar from "chokidar";
import { load }from "cheerio";


const filterUsedClasses = require("./filterUsedClasses")
const { eventEmitter } = require('./generateCSS');

type InputInfo = {
    type: string;
    id: string;
    value: string;
    placeholder: string;
    name: string;
}

const app: Express = express();
const port = 3000;

const server = http.createServer(app);

// init WebSocket server
const wss = new WebSocket.Server({ server });

let serverHTML: string | void = "";
let serverInputs: InputInfo[];
let inputsClient: InputInfo[];

function pickUpInputValue() {
    console.log("client", inputsClient)
    for (const clientMessage of inputsClient) {
        const serverMessage = serverInputs.find(msg => msg.id === clientMessage.id);
        if (serverMessage) {
          serverMessage.value = clientMessage?.value;
        }
      }
    console.log("server", serverInputs)
}

function checkObjectsIdAndType(client: InputInfo[], server: InputInfo[]) {
    const typesById: Record<string, string> = {};

    if(client.length != server.length) return false;

    for (const obj of client) {
        const { id, type } = obj;
        typesById[id] = type;
    }

    for (const obj of server) {
        const { id, type } = obj;

        if (!typesById[id] || typesById[id] && typesById[id] !== type) {
            return false;
        }
    }

    pickUpInputValue();

    return true;
}

function pickUpInputs(data: string) {
    const $ = load(data);
    const inputElements = $('input');
    
    const inputs: InputInfo[] = [];
    
    inputElements.each((index, element) => {
        const inputType = $(element).attr('type') || '';
        const inputId = $(element).attr('id') || '';
        const inputName = $(element).attr('name') || '';
        const inputPlaceholder = $(element).attr('placeholder') || '';
        
        inputs.push({ type: inputType, id: inputId, value: '', name: inputName, placeholder: inputPlaceholder });
    });
    serverInputs = inputs
}


function pickUpHTML() {
    const filePath = 'index.html';
    fs.readFile(filePath, 'utf-8', (err: NodeJS.ErrnoException | null, data: string) => {
        serverHTML = data;
        pickUpInputs(data);
    });
}

eventEmitter.on("info", (info: boolean) => {
    if (info) {
        pickUpHTML();
        wss.clients.forEach((client: WebSocket) => {
            client.send("reloadPage");
        });
    }
});

wss.on('connection', (ws: WebSocket) => {
    console.log('client connected.');

    ws.on('message', (data: WebSocket.Data) => {
        const clientData: string = data.toString();
        const clientDataParsed = JSON.parse(clientData)

        // when happens the refresh on client side and there is data on server and the status is fill-inputs
        // the server sent the data to client side and after it discard the data
        if (clientDataParsed.status === "fill-inputs" && inputsClient && serverHTML) {
            if (checkObjectsIdAndType(inputsClient, serverInputs)) {
                const data = JSON.stringify({ html: serverHTML, inputs: serverInputs})
                ws.send(data);
            }
        }
        // enter on this input when happens a reload on client side and the status is sent-input
        else if (clientDataParsed && clientDataParsed.status === "sent-inputs") {
            inputsClient = clientDataParsed.inputs;
        }
    });

    ws.on('close', () => {
        console.log('disconnected client.');
    });
});

server.listen(port, () => {
    const watcher = chokidar.watch('.', {
        ignored: /(^|[\/\\])\../,
        persistent: true,
        ignoreInitial: true,
    });

    watcher.on('change', (changedFilePath) => {
        if (changedFilePath === "index.html") {
            filterUsedClasses();
        }
    });

    console.log(`Server running at port ${port}`);
});
