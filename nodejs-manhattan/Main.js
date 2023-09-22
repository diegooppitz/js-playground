
function calcDistance(x, y) {
    if (!Array.isArray(x) || !Array.isArray(y)) return 0;
    if (x.length != y.length) return 0;

    let result = 0;
    x.map((num, i) => {
        if(i < x.length - 1) {
            let numX = (num - x[i+1])
            if(numX < 0) numX =- numX;

            let numY = (y[i] - y[i+1])
            if(numY < 0) numY =- numY;

            result += numX + numY;
        }
    });
    return result;
}

module.exports = { calcDistance };