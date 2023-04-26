/*
Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.

Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
*/

'use strict'

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
let worker = new Worker( 'Zavarzina', 'Kristina', 500, 15 );
console.log(worker.getSalary());

class MyString {
  constructor(str) {
    this.str = str;
  }

  reverse() {
    let result = '';
    for (let i = this.str.length - 1; i >= 0; i--) {
      result += this.str[i];
    }
    return result;
  }

  ucFirst() {
    return this.str[0].toUpperCase() + this.str.slice(1).toLowerCase();
  }

  ucWords() {
    let result = '';
    for (let i = 0; i < this.str.length; i++) {
      const strBig = this.str[i] !== ' ' && i === 0 || this.str[i - 1] === ' ';
      result += strBig ? this.str[i].toUpperCase() : this.str[i];
    }
    return result;
  }
}
let string = new MyString( 'zavarzina kristina' );
console.log(string.reverse());
console.log(string.ucFirst());
console.log(string.ucWords());