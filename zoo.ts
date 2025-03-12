class Zoo {
    animals: Animal[] = []

    addAnimals(animal: Animal) {
        this.animals.push(animal)
    }

    removeAnimals(animalToRemove: Animal) {
        this.animals = this.animals.filter(animal => animal.name !== animalToRemove.name)
    }

    displayAllInfo() {
        console.log('This Zoo has these animals:');
        
        this.animals.forEach(animal => {
            console.log(`name - ${animal.name}`)
            console.log(`age - ${animal.age}`)
            console.log(`species - ${animal.species}`)
            
        })
    }

    triggerSound() {
        this.animals.forEach(animal => {
            console.log(`${animal.species} makes this sound: ${animal.makeSound()}`)
        })
    }
}

class Animal {
    name: string
    age: number
    species: string

    constructor(name: string, age: number, species: string) {
        this.name = name
        this.age = age
        this.species = species
    }

    makeSound() {}
}

class Dog extends Animal {
    constructor(name: string, age: number, species: string) {
        super(name, age, species);
    }

    makeSound(): string {
        return "bark"
    }
}

class Cat extends Animal {
    constructor(name: string, age: number, species: string) {
        super(name, age, species);
    }

    makeSound(): string {
        return "meow"
    }
}

const dog = new Dog('Bingo', 2, 'dog')
const cat = new Cat('Luna', 1, 'cat')

dog.makeSound()
cat.makeSound()

const TbilisiZoo = new Zoo

TbilisiZoo.addAnimals(dog)
TbilisiZoo.addAnimals(cat)
TbilisiZoo.displayAllInfo()
TbilisiZoo.triggerSound()
TbilisiZoo.removeAnimals(cat)
TbilisiZoo.removeAnimals(dog)
TbilisiZoo.displayAllInfo()



