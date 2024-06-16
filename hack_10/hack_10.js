/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
*/
let arr = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
let result = [];

function getItems_oddIndices() {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}

//export result
module.exports = getItems_oddIndices();