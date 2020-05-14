let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

// function getAge(pet) {
//   return new Date().getFullYear() - pet.bornOn;
// }

const getAge = (pet) => {return new Date().getFullYear() - pet.bornOn;}

// let petsWithAge = [];
//  for (var i = 0; i < pets.length; i++) {
//    var pet = pets[i];
//    pet.age = getAge(pet);

//  petsWithAge.push(pet);
//  }
let petsWithAge = pets.map(el => { return ({...el, age : getAge(el)})})

console.log(petsWithAge);


// var dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }
let dogs = pets.filter(dog => {
        return (dog.type === "dog" ? dog : false);
})
console.log(dogs);

// var jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }

let jasper = pets.find(n=> {
        return (n.name === "Jasper" ? n : false);
})
console.log("Jasper is " + jasper.age + " years old");