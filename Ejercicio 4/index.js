//! 4.1
// Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().
// const users = [
//  { id: 1, name: 'Abel' },
//  { id: 2, name: 'Julia' },
//  { id: 3, name: 'Pedro' },
//  { id: 4, name: 'Amanda' }
// ]
// const userNames = users.map((user) => user.name)
// console.log(userNames)

//! 4.2
// Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
// const users = [
//  { id: 1, name: 'Abel' },
//  { id: 2, name: 'Julia' },
//  { id: 3, name: 'Pedro' },
//  { id: 4, name: 'Amanda' }
// ]

// const updateNames = users.map((user) =>
//  user.name.startsWith('A') ? 'Anacleto' : user.name
// )
// console.log(updateNames)

//! 4.3
// Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
 { isVisited: true, name: 'Tokyo' },
 { isVisited: false, name: 'Madagascar' },
 { isVisited: true, name: 'Amsterdam' },
 { isVisited: false, name: 'Seul' }
]

const cityNames = cities.map((city) =>
 city.isVisited ? `${city.name} (Visitado)` : city.name
)
console.log(cityNames)
