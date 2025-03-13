"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.animals = [];
    }
    Zoo.prototype.addAnimals = function (animal) {
        this.animals.push(animal);
    };
    Zoo.prototype.removeAnimals = function (animalToRemove) {
        this.animals = this.animals.filter(function (animal) { return animal.name !== animalToRemove.name; });
    };
    Zoo.prototype.displayAllInfo = function () {
        console.log('This Zoo has these animals:');
        this.animals.forEach(function (animal) {
            console.log("name - ".concat(animal.name));
            console.log("age - ".concat(animal.age));
            console.log("species - ".concat(animal.species));
        });
    };
    Zoo.prototype.triggerSound = function () {
        this.animals.forEach(function (animal) {
            console.log("".concat(animal.species, " makes this sound: ").concat(animal.makeSound()));
        });
    };
    return Zoo;
}());
exports.default = Zoo;
