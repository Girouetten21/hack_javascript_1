/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
function whileLoop() {
  let i = 1;
  while (i <= 5) {
    result.push(i);
    i++;
  }
  return result;
}

//export result
module.exports = whileLoop();