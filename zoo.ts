import Animal from './Animal'

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

export default Zoo