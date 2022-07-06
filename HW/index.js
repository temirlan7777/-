// Реализуйте класс class Animal {}. У которого есть поля type, age, name
// От класса Animal унаследовать и создать класс Dog и Cat
// У класса Dog добавить метод sayGav- который будет выводить в console.log(‘Gav’). У класса Cat создать метод jump который будет выводить в console.log(Прыгаю). 
// Далее от каждого из классов (dog, cat)- унаследуйте методы и создайте под классы Tiger, Wolf. У них будут методы поля weight и метод sayWeight()

class Animal {
    constructor(type, age, name)
    this.type=type, 
    this.age=age, 
    this.name=name,
}
class Dog extends Animal{
    constructor(type, age, name)
    super(type, age, name)
    sayGav(console.log('Gav');)
}

class Cat extends Animal{
    constructor(type, age, name)
    super(type, age, name)
    sayCat(console.log('Прыгаю');)
}
class Wolf extends Dog{
    constructor(type, age, name,weight)
    super(type, age, name)
    this.weight=10,
    sayWeight(console.log(${this.weight}kg);)
}
class Tiger extends Cat{
    constructor(type, age, name,weight)
    super(type, age, name)
    this.weight=8,
    sayWeight(console.log(${this.weight}kg);)
}

// Простые задачи
//  Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
//  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//  С помощью нашего класса создайте двух рабочих и найдите сумму их зарплат.

class Worker {
    constructor(name, surname, rate, days)
    this.name=Tima, 
    this.surname=Aydarov, 
    this.rate=10, 
    this.days=31,
    getSalary(${rate}*${days})
} 
const worker1= new Worker(Bob,Sponge, 20,30)
const worker2= new Worker(Squidward,Tentacles,25,25)
const salary= worker1.getSalary() += worker2.getSalary()
console.log(salary);

// Практика
// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, 
// который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString{
    reverse()
    ucFirst()
    ucWords()
}
const str= new MyString('салам алейкум')
console.log(str);


// практика2
// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. 
// Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
// метод isDate для проверки даты и метод isPhone для проверки телефона:

class Validator{
    isEmail()
    isDomain() 
    isDate()
    isPhone() 
}
const validator= new Validator('fgvkfgtfgv')