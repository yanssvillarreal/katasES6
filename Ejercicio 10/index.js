//! 10
// Dado el siguiente javascript usa forof y forin para hacer la media del
// volumen de todos los sonidos favoritos que tienen los usuarios.

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

// Variables para acumular el volumen total y contar los sonidos
let totalVolume = 0
let soundsCount = 0

// Recorrer usuarios con for...of
for (const user of users) {
 // Recorrer los sonidos favoritos de cada usuario con for...in
 for (const sound in user.favoritesSounds) {
  // Acumular el volumen de cada sonido
  totalVolume += user.favoritesSounds[sound].volume
  // Incrementar el contador de sonidos
  soundsCount++
 }
}

// Calcular la media del volumen
const averageVolume = totalVolume / soundsCount

console.log(averageVolume)

// Explicación:
// for...of: Recorre el array de usuarios.
// for...in: Recorre las propiedades (los sonidos favoritos) dentro de cada objeto favoritesSounds.
// Acumulación de volumen: En cada iteración, se añade el volumen de cada sonido al total (totalVolume), y se cuenta cuántos sonidos hemos recorrido con soundsCount.
// Cálculo de la media: Finalmente, se calcula la media dividiendo el totalVolume por el soundsCount.
