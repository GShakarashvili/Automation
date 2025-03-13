"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Animal.prototype.makeSound = function () { };
    return Animal;
}());
exports.default = Animal;
