let a =  10;

//If statement
if(a >= 10){
    console.log('It is True');

//if-Else statement
if(a >= 10){
    console.log('It is True');
}else{
    console.log('It is False');
}

//Eligible for vote or not using if-Else
let age = 18;
var hasVoterId = 'Na';

if(age >= 18 && hasVoterId == 'yes'){
    console.log('Eligible to vote');
}
else if(age >= 18 && hasVoterId != 'yes'){
    console.log('Apply for voterId');
}
else{
    console.log('not Eligible to vote');
}


//Eligible for vote or not using if-Else input from user
let age = parseInt(prompt("Please enter your age"));
let hasVoterId = prompt("Do you have voterId");
if(age >= 18 && (hasVoterId == 'yes' || hasVoterId == 'YES' || hasVoterId == 'Yes')){
    console.log('Eligible to vote');
}
else if(age >= 18 && (hasVoterId != 'yes' || hasVoterId != 'YES' || hasVoterId != 'Yes')){
    console.log('Apply for voterId');
}
else{
    console.log('not Eligible to vote');
}

// Nested if-else
let age = parseInt(prompt("Please enter your age"));
hasVoterId = prompt("Do you have voterId");
if (age >= 18) {
    if (hasVoterId == 'yes' || hasVoterId == 'YES' || hasVoterId == 'Yes') {
        console.log('Eligible to vote');
    }
    else {
        console.log('Apply for voterId');
    }
}else {
    console.log('not Eligible to vote');
}

// NEw Way to solve this program if age is less than 18 then it will not ask hasVoterId question
let age = parseInt(prompt("Please enter your age"));
if (age >= 18) {
    hasVoterId = prompt("Do you have voterId");
    if (hasVoterId == 'yes' || hasVoterId == 'YES' || hasVoterId == 'Yes') {
        console.log('Eligible to vote');
    }
    else {
        console.log('Apply for voterId');
    }
}else {
    console.log('not Eligible to vote');
}

// Bike and Tax Program
let cost_price = parseInt(prompt('Please enter cost of bike'));

if(cost_price > 100000){
    console.log('You have to pay tax aroungd 15%');
}
else if(cost_price > 50000 && cost_price <= 100000){
    console.log('You have to pay tax aroungd 10%');
}
else if(cost_price <= 50000){
    console.log('You have to pay tax aroungd 5%');
}
else{
    console.log('Check the input');
}
