/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
function whileLoop() {
    let i = 7;
    while (i >= 1) {
      result.push(i);
      i -= 2;
    }
    return result;
}

//export result
module.exports = whileLoop();