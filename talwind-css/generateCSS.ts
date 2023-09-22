import * as fs from 'fs';
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function generateCSS(usedClasses: string[], sourceCSSFile: string, outputCSSFile: string) {

  const cssContent = fs.readFileSync(sourceCSSFile, 'utf8');
  const classRegex = /\.([^\s{]+)\s*\{([^}]+)\}/g;
  const filteredCSS: string[] = [];

  let match;
  while ((match = classRegex.exec(cssContent)) !== null) {
    const className = match[1];
    if (usedClasses.includes(className)) {
      filteredCSS.push(match[0]);
    }
  }

  const filteredCSSContent = filteredCSS.join('\n');

  fs.writeFile(outputCSSFile, filteredCSSContent, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error('Error writing filtered CSS file:', err);
    } else {
      eventEmitter.emit("info", true)
      console.log('Filtered CSS file created or updated successfully!');
    }
  });
}

module.exports = {
  eventEmitter,
  generateCSS,
}