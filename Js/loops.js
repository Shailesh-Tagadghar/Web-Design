loop :- sometime we need to run block of code again and again on that time we will use loop

there are two types : 
   1. for
   2. while

for loop : for loop which is use when we know the number of iteration
-----------we know the how many times the loop will be repeated

while loop : while loop which is used when we dont know the number of iteration
----------while loop block will be execute infinite number of time until condition is met


var ==> block and in-block -- scope -- local and global
let ==> block -- scope -- local
const ==> block -- scope -- local

for loop examples :
=============================
for(i=1; i<=10; i++){
    console.log('shailesh',i);
}
=============================
for(i=1; i<11; i++){

}
console.log(i);
=============================
printing 2 * 2 table
n=2
for(i=1; i<=10; ++i){
    console.log(n + ' * ' + i + ' =', n * i);
}
=============================
   
while loop examples :

i=1
while(i<=10){
    console.log('shailesh',i);
    i=i+1
}
console.log(i);
=============================

nested for loop examples :

for(i=1;i<=3;i++){
    for(j=1;j<=3;j++){
        console.log(i + ' ' + j);
    }
}
=============================

nested while loop examples :
   
x = 1;
while(x<11){
    x=x+1
    break //it will break the loop 
}
console.log(x);
=============================

x = 1;
while(x<11){
    x=x+1
    continue // it will continue the loop - it will check condition again and again till condition is false.
}
console.log(x);
=============================

x = 1;
while(x<11){
    x=x+1
    {
        
    }
}
console.log(x); // it is same as continue
