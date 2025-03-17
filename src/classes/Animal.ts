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

export default Animal;