import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players';
// import someDefault,{greetUser,name} from './../imports/utils';
// import add from './../imports/math';

//
// console.log(greetUser(),name);
// console.log(add(195,5));
// console.log(someDefault);
Meteor.startup(function(){
  // code to run on server at startup
// Players.insert({
// name:'Gudu',
// score:3
// });
// console.log(Players.find().fetch());
// let square = function(x) {
//   return x * x;
// };
// console.log(square(100));
//
// let square1 = (a) => a * a;
// console.log(square1(3))
// let user = {
// name:'Asabeneh',
// sayHi(){
// setTimeout(()=>{
// console.log(this.name)
// },1000);
// }
// };
// user.sayHi(1,2);
// let numbers = [9,99,4,56];
// let newNumbers = numbers.map((number) => number+1);
// console.log(newNumbers);
class Person {
constructor(name = 'Anonymous',age = 0){
this.name = name;
this.age =age;
}
getGreeting(){
return `Hi,${this.name}.`
}
getPersonDescription(){
return `${this.name} is ${this.age} year(s) old`;
}

}

class Employee extends Person {
constructor(name, age,title){
super(name,age);
this.title = title;
}
getGreeting(){
if(this.title){
if(this.age){
return `Hi, I am ${this.name}. I am ${this.age} years old. I work as a ${this.title}.`
}
else{
return `Hi, I am ${this.name}. I work as ${this.title}.`
}

}
else{
return super.getGreeting();

}

}
hasJob(){
return !!this.title;
}
}
class Programmer extends Person{
constructor(name,age,title,preferredLang = 'Assembly'){
super(name,age);
this.preferredLang = preferredLang
}
getGreeting(){
return `I am ${this.name}.I am a ${this.preferredLang} developer`;
}
}
let me = new Person('Asabeneh',100);
console.log(me.getGreeting());
console.log(me.getPersonDescription());

let person = new Employee('Getaneh',150,'Software Enginner');
console.log(person.getGreeting());

let programmer = new Programmer('Desalegn',25,'JavaScript')
console.log(programmer.getGreeting());
});


let user= {
name:'Asabeneh',
location:'Philadelphia'

};

let person = {
...user,
age:25
}

console.log(person.age);
console.log(person)

let bike = 'Scott';
let stuff = {
bike:bike,
user:person
};

console.log(stuff)

let house = {
bedrooms:2,
bathroom:1.5
}
let yearBuilt = 1995;

let houseInfo={
...house,
yearBuilt:yearBuilt,
flooring:'Carpet'
}

console.log(houseInfo);
