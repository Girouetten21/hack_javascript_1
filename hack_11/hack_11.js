/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
// Comento este hack ya que siento que es un poco complejo
let numberArray = [1, 2, 3, 4, 5];
let letterArray = ["one","two","three","four","five"];
let stringArray = ["foo","bar","baz","quX","echo"];
let result = [];

function combine_Arrays() {
  result.push("h@ck"); // Agregar "h@ck" al principio

  numberArray.forEach((num, index) => {
    if (num % 2!== 0) {
      result.push(letterArray[index]); // Reemplazar números impares con letterArray
    } else {
      result.push(num); // Agregar números pares sin reemplazar a result
    }
  });

  result.push("h@ck"); // Agregar "h@ck" en medio

  stringArray = modify_stringArray(stringArray); //Reemplaza el contenido de stringArray usando un metodo y agrega contenido a result
  for (let i = 0; i < stringArray.length; i++) {
    result.push(stringArray[i]);
  }

  result.push("h@ck"); // Agregar "h@ck" al final
  return result;
}

function modify_stringArray(arr) {
    return arr.map((str) => {
      switch (str) {
        case "foo":
          return "f00";
        case "bar":
          return "Bar";
        case "baz":
          return "b@z";
        case "qux":
          return "quX";
        case "echo":
          return "3ch0";
        default:
          return str;
      }
    });
  }

//export result
module.exports = combine_Arrays();