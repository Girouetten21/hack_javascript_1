/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

function toUpper_Char() {
  arr.forEach(str => {
    result.push(str.charAt(0).toUpperCase() + str.slice(1));
  });
  return result;
}

//export result
module.exports = toUpper_Char();