//! 11
// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha
// sido cada sonido agregado por los usuarios a favorito.

// Para ello recorre la lista de usuarios y usa forin para recoger el nombre
// de los sonidos que el usuario tenga como favoritos.

// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
// vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a
// la vez un buen reto y oportunidad para comprender que hay muchas formas de
// hacer las cosas en javascript.

const users = [
 {
  name: 'Alberto',
  favoritesSounds: {
   waves: { format: 'mp3', volume: 50 },
   rain: { format: 'ogg', volume: 60 },
   firecamp: { format: 'mp3', volume: 80 }
  }
 },
 {
  name: 'Antonio',
  favoritesSounds: {
   waves: { format: 'mp3', volume: 30 },
   shower: { format: 'ogg', volume: 55 },
   train: { format: 'mp3', volume: 60 }
  }
 },
 {
  name: 'Pedro',
  favoritesSounds: {
   shower: { format: 'mp3', volume: 50 },
   train: { format: 'ogg', volume: 60 },
   firecamp: { format: 'mp3', volume: 80 }
  }
 },
 {
  name: 'Cristina',
  favoritesSounds: {
   waves: { format: 'mp3', volume: 67 },
   wind: { format: 'ogg', volume: 35 },
   firecamp: { format: 'mp3', volume: 60 }
  }
 }
]

// Objeto para almacenar el conteo de cada sonido
const soundCount = {}

// Usamos for...of para recorrer el array de usuarios
for (const user of users) {
 // Usamos for...in para recorrer los sonidos favoritos del usuario
 for (const sound in user.favoritesSounds) {
  // Si el sonido ya existe en el objeto soundCount, incrementamos su valor
  if (soundCount[sound]) {
   soundCount[sound]++
  } else {
   // Si no existe, lo inicializamos con 1
   soundCount[sound] = 1
  }
 }
}

console.log(soundCount)

// Explicación:
// Este ejercicio consiste en contar cuántas veces aparece cada sonido en los favoritos de los usuarios. Para ello, podemos usar un objeto que almacene el nombre de cada sonido como clave y su conteo como valor. Utilizaremos un for...of para recorrer a los usuarios, y dentro de cada usuario, utilizaremos un for...in para recorrer sus sonidos favoritos.
// soundCount: Creamos un objeto vacío para almacenar el conteo de cada sonido.
// for...of: Recorre el array de users.
// for...in: Dentro de cada usuario, recorremos sus sonidos favoritos usando for...in, lo que nos da acceso al nombre de cada sonido.
// Conteo de sonidos:
// Si el sonido ya existe en el objeto soundCount, simplemente incrementamos su valor.
// Si no existe, lo añadimos al objeto con un valor inicial de 1.
// Resultado: Al final, soundCount contendrá el número de veces que cada sonido ha sido marcado como favorito por algún usuario.
