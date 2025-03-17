import Animal from './Animal'

class Dog extends Animal {
    constructor(name: string, age: number, species: string) {
        super(name, age, species)
    }

    makeSound(): string {
        return "bark"
    }
}

export default Dog