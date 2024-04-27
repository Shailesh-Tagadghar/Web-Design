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

