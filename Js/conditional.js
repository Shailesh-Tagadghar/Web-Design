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


//Leap Year
let year = parseInt(prompt('Please enter year'));
if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
    console.log('Leap Year');
}
else {
    console.log('Not Leap Year');
}


// print days from 1 to 7 num
let num = parseInt(prompt('Please enter num'));

if(num > 0 && num <= 7){
    if(num == 1){
        console.log('Sunday');
    }
    else if(num == 2){
        console.log('Monday');
    }
    else if(num == 3){
        console.log('Tuesday');
    }
    else if(num == 4){
        console.log('Wednesday');
    }
    else if(num == 5){
        console.log('Thursday');
    }
    else if(num == 6){
        console.log('Friday');
    }
    else if(num == 7){
        console.log('Saturday');
    }
    else{
        console.log('Check Input');
    }
}
else{
    console.log('Check input');
}

// month and days
let num = parseInt(prompt('Please enter num'));

if(num > 0 && num <= 12){
    if(num == 1){
        console.log('Jan and Num of days is 31');
    }
    else if(num == 2){
        console.log('Feb and Num of days is 28');
    }
    else if(num == 3){
        console.log('Mar and Num of days is 31');
    }
    else if(num == 4){
        console.log('Apr and Num of days is 30');
    }
    else if(num == 5){
        console.log('May and Num of days is 31');
    }
    else if(num == 6){
        console.log('Jun and Num of days is 30');
    }
    else if(num == 7){
        console.log('Jul and Num of days is 31');
    }
    else if(num == 8){
        console.log('Aug and Num of days is 31');
    }
    else if(num == 9){
        console.log('Sep and Num of days is 30');
    }
    else if(num == 10){
        console.log('Oct and Num of days is 31');
    }
    else if(num == 11){
        console.log('Nov and Num of days is 30');
    }
    else{
        console.log('Dec and Num of days is 31');
    }
}
else{
    console.log('Check input');
}


example:
fisrt : 
a = 5;
if(a>=10){
    if('hie'){
        if(10){
            document.write('Hii');
        }
        else{
            document.write('Rajesh');
        }
    }
}
else{
    if(10){
        if(a==5){
            if('priya'){
                document.write('priya');
            }
            else{
                document.write('Rajesh');
            }
    }
}
}


second : 

a=5;
a=11;
b=12;
a=3;

if(a==5){
    if('====='){
        if(a==3){
            console.log('kuch bhi');
        }
    }
}
else{
    console.log('name is shailesh');
    if(3){
        console.log('rajesh');
    }
    else{
        console.log('done');
    }
}
