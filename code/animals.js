/*
HW 
(Клас - конструктор)

Створити клас Animal та наслідуючі його класи Dog, Cat, Horse.
Клас Animal містить змінні food, location і методи makeNoise, eat, sleep.
Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
Dog, Cat, Horse перезаписують методи makeNoise, eat.
Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
Створіть клас Ветеринар, у якому визначте метод void (Нічого не повертає) 
treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас.
У циклі надсилайте їх на прийом до ветеринара.
*/

'use strict'

function Dog (food, location, color, name, type) {
  Animal.apply(this, arguments);
  this.color = color;
  this.name = name;
  this.type = type;
}

Dog.prototype.makeNoise = function () {
  console.log( `This animal sleeps 8 hours a day:`, this.name );
};

Dog.prototype.eat = function () {
  console.log( `This animal eats 2 times a day:`, this.type );
};

function Cat (food, location, color, name, type) {
  Animal.apply(this, arguments);
  this.color = color;
  this.name = name;
  this.type = type;
}

Cat.prototype.makeNoise = function () {
  console.log( `This animal sleeps 16 hours a day:`, this.name );
};

Cat.prototype.eat = function () {
  console.log( `This animal eats 6 times a day:`, this.type );
};

function Horse (food, location, color, name, type) {
  Animal.apply(this, arguments);
  this.color = color;
  this.name = name;
  this.type = type;
}

Horse.prototype.makeNoise = function () {
  console.log( `This animal sleeps 6-8 hours a day:`, this.name );
};

Horse.prototype.eat = function () {
  console.log( `This animal eats 4 times a day:`, this.type );
};

function Animal (food, location) {
  this.food = food;
  this.location = location;
}

Animal.prototype.makeNoise = function () {
  console.log( `This animal is now in the city:`, this.location );
};

Animal.prototype.sleep = function () {
  console.log( `This animal is now sleeping in:`, this.location );
};

Animal.prototype.eat = function () {
  console.log( `This animal is eating now:`, this.food );
};

const animal = new Animal('Your food', 'Kiev', 'Kiev');
animal.makeNoise();
animal.sleep();
animal.eat();

console.log(animal);

Dog.prototype = Object.create(Animal.prototype);
Cat.prototype = Object.create(Animal.prototype);
Horse.prototype = Object.create(Animal.prototype);

const dog = new Dog('dried food', 'Kiev', '#ba9563', 'Rain', 'spaniel');
const cat = new Cat('sterilised food', 'Kiev', 'leopard', 'Deni', 'bengal');
const horse = new Horse('fresh grass', 'Vasilkov', '#000', 'Boss', 'mustang');

dog.makeNoise();
dog.eat();
cat.makeNoise();
cat.eat();
horse.makeNoise();
horse.eat();

console.log(dog);
console.log(cat);
console.log(horse);



function Veterinarian () {
  Animal.apply(this, arguments);
}

Veterinarian.prototype.treatAnimal = function () {
  console.log( `${this.food} in ${this.location} of the animal that came to the reception.` );
};

Veterinarian.prototype.main = function () {
  const typeAnimals = ['Rain', 'Deni', 'Boss'];
  console.log(typeAnimals);

  typeAnimals.map(function(elem) {
    console.log( `${elem} goes to the veterinarian` );
  });
};

const vet = new Veterinarian('Sterilised food', 'Kiev');

vet.treatAnimal();
vet.main();

console.log(vet);