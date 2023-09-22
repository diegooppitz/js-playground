const { JSDOM } = require('jsdom');

function getUsedClasses(html: string): string[] {
    const dom = new JSDOM(html);
    const elements = dom.window.document.querySelectorAll('*');

    const classes = new Set <string> ();

    elements.forEach((element: HTMLElement) => {
        const elementClasses = element.getAttribute('class');

        if (elementClasses) {
            const classList = elementClasses.split(' ');

            classList.forEach((className: string) => {
                classes.add(className);
            });
        }
    });

    return Array.from(classes);
}

module.exports = getUsedClasses;