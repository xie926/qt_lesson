//咖啡机
// oo 面向对象
var Coffee = function(){

}
Coffee.prototype.boilWater = function(){
    console.log("把水烧开");
} 
Coffee.prototype.brewCoffeeGriends = function(){
    console.log("用沸水冲咖啡");
}
Coffee.prototype.pourInCup = function(){
    console.log("把咖啡倒进杯子");
}
Coffee.prototype.addSugarAndMilk = function(){
    console.log("加糖加牛奶");
}
Coffee.prototype.cook = function(){
    this.boilWater();
    this.boilWater();
    this.pourInCup();
    this.addSugarAndMilk();
}
var coffee = new Coffee();
coffee.cook();
