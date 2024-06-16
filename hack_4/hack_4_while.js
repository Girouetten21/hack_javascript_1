/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
function whileLoop() {
    let i = 1;
    while (i <= 7) {
      result.push(i);
      i += 2;
    }
    return result;
  }

//export result
module.exports = whileLoop();