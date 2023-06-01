const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName ="simon"

console.log(person1);
console.log(person2);


// la variabile person2 è assegnata all'oggetto person1, dato che fanno riferimento alla stessa posizione di memoria, 
// cambiando uno dei due cambiano entrambi le loro caratteristiche