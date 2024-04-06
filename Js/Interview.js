This programs mostly ask in Interview

// Prime Number or Not

n = parseInt(prompt('Enter the Number : '))
count = 0

i = 1 

while(i<=n){
    if(n%i==0){
        count=count+1
    }
    i = i + 1
}

if(count == 2){
    document.write(n + ' is a Prime Number')
}
else{
    document.write(n + ' is Not a Prime Number')
}


// Palindrome Number or Not

num = parseInt(prompt('Enter the Number : '))
p_num = num // p_num is a temporary variable to store new value because in the end num = 0
rev_num = 0  // reverse number

while(num!=0){
    rem = num % 10 // reminder
    rev_num = rev_num * 10 + rem
    num = Math.floor(num/10) //to remove after decimal value eg. 12.1 ==> 12
}

if(rev_num == p_num){
    document.write(p_num + ' Is Palindrome Number')
}
else{
    document.write(p_num + ' Is Not Palindrome Number')
}


//Armstrong Number

number = prompt('Enter the Number : ');
sum = 0;
temp = number;

while (temp > 0) {
    rem = temp % 10;
    sum = sum + (rem * rem * rem);
    temp = parseInt(temp / 10);
}
// check the condition
if (sum == number) {
    document.write(`${number} is an Armstrong number`);
}
else {
    document.write(`${number} is not an Armstrong number.`);
}

OR

