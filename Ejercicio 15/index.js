//! 15
// Crea una función llamada swap que reciba un array y dos parametros que sean
// indices del array. La función deberá intercambiar la posición de los valores de
// los indices que hayamos enviado como parametro. Retorna el array resultante.
// Sugerencia de array:

function swap(array, index1, index2) {
 let temp = array[index1]
 array[index1] = array[index2]
 array[index2] = temp
 return array
}

const fantasticFour = [
 'La antorcha humana',
 'Mr. Fantástico',
 'La mujer invisible',
 'La cosa'
]

console.log(swap(fantasticFour, 0, 3))
console.log(swap(fantasticFour, 1, 2))
