const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "MCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach(student => console.log(student));

// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const findIndexMaria = students.findIndex(student => student === "Maria");
console.log(findIndexMaria);

// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const someKaterina = students.some(student => student === "Katerina");
console.log(someKaterina);

// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const nameSmall5 = students.find(student => student.length <= 5);
console.log(nameSmall5);

// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const nameMore4Chars = students.every(student => student.length >4);
console.log(nameMore4Chars);

// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const filterName = students.filter(student => student.includes("i"));
console.log(filterName);

// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
const initialName = students.map(student => student[0]);
console.log(initialName)