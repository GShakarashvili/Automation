import Animal from './Animal'

class Cat extends Animal {
    constructor(name: string, age: number, species: string) {
        super(name, age, species)
    }

    makeSound(): string {
        return "meow"
    }
}

export default Cat