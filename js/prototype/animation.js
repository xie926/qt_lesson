function Animal(planet) {
    this.planet = planet;
}
// constructor 函数是JS的一等对象
// 原型对象 return {planet:}
Animal.prototype.getPlanet = function() {
    return this.planet;
}

function Person(name) {
    this.name = name;
}

// 人类也在地球
// 原型链跑 animal => Animal.prototype => Object
Person.prototype = new Animal('earth')

Person.prototype.getName = function() {
    return this.name;
}

const person = new Person("三水清");
console.log(person.getPlanet());
console.log(person.getName());
console.log(Person.prototype.__proto__ === Animal.prototype)