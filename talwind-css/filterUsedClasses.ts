import * as fs from 'fs';

const { generateCSS } = require('./generateCSS');
const getUsedClasses = require("./getUsedClasses")

function filterUsedClasses() {
  const filePath = 'index.html';
  fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      console.error('read file error:', err);
      return;
    }

    const usedClasses = getUsedClasses(data);
    generateCSS(usedClasses, 'css/styles.css', 'output.css');
  });
}

module.exports = filterUsedClasses;