/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
function forLoop() {
    for (let i = 7; i >= 1; i -= 2) {
      result.push(i);
    }
    return result;
  }
  
//export result
module.exports = forLoop();