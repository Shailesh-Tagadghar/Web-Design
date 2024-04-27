let person_array = ['shailesh','ankit',33]

console.log(person_array);

let person_obj = {first_name : "Shailesh", last_name : "Tagadghar", age : 22, contact : "1234567890", 'dept name' : 'IT'}

// console.log(person_obj);

// document.write(person_obj)

document.write('Age : '+person_obj.age)

person_obj.email = 's@gmail.com'

console.log(person_obj);
document.write('Email : '+person_obj.email)

console.log('email' in person_obj);

for(let i in person_obj){
    console.log(i);
}

for(let i in person_obj){
    console.log(i + " : " + person_obj[i]);
}

let person = {
    first_name : 'sat',
    age : '22',
    display(){
        console.log('Hello i am '+ person.first_name + ' and i have purchase a new ' + car.brand + ' car from a showroom');
    }
}

let car = {
    brand : 'Tata',
    color : 'Red'
}

person.display();

// Using This Keyword : (this)

let person1 = {
    first_name : 'ast',
    age : '22',
    display(){
        console.log('Hello i am '+ this.first_name + ' and i have purchase a new ' + car.brand + ' car from a showroom');
    }
}

let car1 = {
    brand : 'Tata',
    color : 'Red'
}

person1.display();

//Math Object examples

console.log('Math Object');

//Round Off
var x = Math.round(5.7)
console.log(x);

//Floor value
var x = Math.floor(5.7)
console.log(x);

//ceiling value
var x = Math.ceil(5.7)
console.log(x);

//Power raise to (2 raise to 5)
var x = Math.pow(2,5)
console.log(x);

//Square root of 25 is 5
var x = Math.sqrt(25)
console.log(x);

//Max value
var x = Math.max(5,6,7,8,9)
console.log(x);

//Min value
var x = Math.min(5,6,7,8,9)
console.log(x);

