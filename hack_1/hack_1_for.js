/**
 * mediante el loop for agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];
function forLoop() {
    for (let i = 0; i <= 5; i++) {
        result.push(i);
    }
    return result;
}

//export result
module.exports = forLoop();