import Zoo from './Zoo';
import Dog from './Dog';
import Cat from './Cat';


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



