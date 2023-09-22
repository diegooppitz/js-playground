
const main = require("../Main.js") 

describe("Solution Testing", function() {
    describe("main", function() {
      it("returns 0", function() {
        const x = [0,0];
        const y = [0,0];
        const result = main.calcDistance(x,y);

        expect(result).toBe(0);
      });
      it("returns the distance between two locations", function() {
        const x = [2,5];
        const y = [3,8];
        const sum = main.calcDistance(x,y);

        expect(sum).toBe(8);
      });

      it("returns the result of several numbers", function() {
        const x = [0,1];
        const y = [1,3];
        const sum = main.calcDistance([0,3,1,0],[1,2,1,10]);

        expect(sum).toBe(17);
      });
    });
});