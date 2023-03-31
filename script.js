class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    residents = [];
    addResident(Human) {
        this.residents.push(Human);
    }
}

class House {
    flats = [];
    constructor (maxOfFlats) {
        this.maxFlats = maxOfFlats;
    }
    addFlat(Flat) {
        if(this.flats.length < this.maxFlats) {
            this.flats.push(Flat);
        } else {
            alert("Забагато");
        }
    }
}

const igor = new Human('Igor', 'male');
const sveta = new Human('Svetlana', 'female');
const petro = new Human('Petro', 'male');
const maxim = new Human('Maxim', 'male');
const diana = new Human('Diana', 'female');
const dimon = new Human('Dimon', 'male');

const flat1 = new Flat;
const flat2 = new Flat;
const flat3 = new Flat;
const flat4 = new Flat;

flat1.addResident(igor);
flat1.addResident(sveta);
flat2.addResident(petro);
flat2.addResident(diana);
flat3.addResident(maxim);
flat4.addResident(dimon);

const house1 = new House(3);

house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);
house1.addFlat(flat4);

console.log(sveta);
console.log(flat2);
console.log(house1);