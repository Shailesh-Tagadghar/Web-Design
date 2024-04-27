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
