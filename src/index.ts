import Zoo from './classes/Zoo';
import Dog from './classes/Dog';
import Cat from './classes/Cat';


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



