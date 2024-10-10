//! 9
// Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por
// consola el array de categorías. Ten en cuenta que las categorías no deberían
// repetirse.

// Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
 {
  title: 'Bracula: Condemor II',
  duration: 192,
  categories: ['comedia', 'aventura']
 },
 {
  title: 'Spider-Man: No Way Home',
  duration: 122,
  categories: ['aventura', 'acción']
 },
 {
  title: 'The Voices',
  duration: 223,
  categories: ['comedia', 'thriller']
 },
 {
  title: 'Shrek',
  duration: 111,
  categories: ['comedia', 'aventura', 'animación']
 }
]

// Array para almacenar las categorías únicas
const uniqueCategories = []

// Usamos for...of para recorrer el array de películas
for (const movie of movies) {
 // Recorremos las categorías de cada película
 for (const category of movie.categories) {
  // Verificamos si la categoría ya está en el array, si no, la añadimos
  if (!uniqueCategories.includes(category)) {
   uniqueCategories.push(category)
  }
 }
}

console.log(uniqueCategories)

// Explicación:
// for...of: Recorre el array de películas (movies), y dentro de ese bucle, recorremos las categorías de cada película.
// if (!uniqueCategories.includes(category)): Verifica si la categoría ya está en el array de categorías únicas (uniqueCategories). Si no está, la añadimos al array usando .push().
// Al final, el array uniqueCategories contiene todas las categorías únicas sin repeticiones.
