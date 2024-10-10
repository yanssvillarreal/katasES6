//! 13
// Usando la función anterior beneficiate de poder conocer el indice del array
// para crear una función llamada removeItem que pasandole un array y un texto
// como parametros (los mismos parametros que en el anterior ejercicio) llame a
// la función anteriormente creada findArrayIndex y obten el indice para
// posteriormente usar la función de javascript .splice() para eliminar el
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan
// correctamente.

// Función anterior findArrayIndex
function findArrayIndex(array, text) {
 for (let i = 0; i < array.length; i++) {
  if (array[i] === text) {
   return i
  }
 }
 return -1
}

// Nueva función removeItem
function removeItem(array, text) {
 // Obtener el índice del elemento a eliminar
 const index = findArrayIndex(array, text)

 // Si el índice es válido (no es -1), eliminamos el elemento usando splice
 if (index !== -1) {
  array.splice(index, 1) // Elimina el elemento en la posición index
 }

 // Retornar el array modificado
 return array
}

// Ejemplo de uso
const mainCharacters = [
 'Luke',
 'Leia',
 'Han Solo',
 'Chewbacca',
 'Rey',
 'Anakin',
 'Obi-Wan'
]

// Pruebas de la función
console.log(removeItem(mainCharacters, 'Leia')) // ["Luke", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters, 'Rey')) // ["Luke", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]
console.log(removeItem(mainCharacters, 'Yoda')) // ["Luke", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"] (no hace nada porque Yoda no está)
console.log(removeItem(mainCharacters, 'Han Solo')) // ["Luke", "Chewbacca", "Anakin", "Obi-Wan"]

// Explicación:
// Función findArrayIndex: Busca el índice del elemento que coincide con el texto proporcionado.
// Función removeItem:
// Llama a findArrayIndex para encontrar el índice del texto en el array.
// Si el índice es válido (mayor o igual a 0), usa splice() para eliminar el elemento en esa posición.
// Devuelve el array modificado.
// Ejemplos de uso:
// Al eliminar "Leia", el array actualizado se devuelve sin "Leia".
// Si el texto no está en el array (por ejemplo, "Yoda"), no se realiza ningún cambio en el array.
