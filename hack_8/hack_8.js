/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

function modify_result() {
  result = arr.slice(1, 4);
  
  result[0] = result[0].replace('a', '@');
  result[1] = result[1].replace('a', '@');
  
  result[2] = result[2].toUpperCase();
  
  return result;
}

//export result
module.exports = modify_result();