/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [1, 2, 3, 4, 5, 6, 7];
function map() {
    return result.filter(num => num % 2 !== 0).reverse();
}

//export result
module.exports = map();