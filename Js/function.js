function :-  Function is block of code, which perform a specific task it runs only when it is called.

argument :- a variable which is present in function called as argument

parameter :- a varibale is present as function header part is called as parameter
eg :
function add(a,b){ ---parameter
  console.log(a+b);
}
a=10;
b=20;
add(a+b); ---argument

Types of functions return types :
1. function with no argument no return.
  eg : 
      function add(){
        a=10;
        b=10;
        console.log(a+b);
      }
      add();

2. function with no argument but return.
  eg : 
      function add(){
        a=10;
        b=10;
        return a+b;
      }
      console.log(add());

3. function with argument no return.
  eg : 
      function add(m,n){
        a=10;
        b=10;
        console.log(a+b+A+B);
      }
      A=10;  == m
      B=10;  == n
      add(A,B);
  
4. function with argument with return.
  eg : 
      function add(m,n){
        a=10;
        b=10;
        return a+b+A+B;
      }
      A=10;  == m
      B=10;  == n
      c=add(A,B);
      console.log(c);

Types of parameters : 
1. Positional argument : check the position of given argument and parameters
   eg :
    function simp(p,r,t){
      console.log('principle is '+p);
      console.log('rate is '+r);
      console.log('time is '+t);
      si = p * r * t / 100;
      console.log('simple interest is '+s1);
    }
   p = 5000;
   r = 10;
   t = 5;
   simp(p,r,t);

2. default argument : if you haven't defined the values of t then we will provide default value in parameter
  eg :
    function simp(p,r,t=5){
      console.log('principle is '+p);
      console.log('rate is '+r);
      console.log('time is '+t);
      si = p * r * t / 100;
      console.log('simple interest is '+s1);
    }
   p = 5000;
   r = 10;
   t = 5;
   simp(p,r);

3. keyword / named argument : it don't matter the position of the argument doesn't work in javascript
eg :
    function simp(r,p,t){
      console.log('principle is '+p);
      console.log('rate is '+r);
      console.log('time is '+t);
      si = p * r * t / 100;
      console.log('simple interest is '+s1);
    }
   p = 5000;
   r = 10;
   t = 5;
   simp(p=10000,r=17,t=7);
 ///////////////////// Anonymous Function ///////////////
function show(){
    console.log('Hello Shailesh');
}
show()

// Anonymous Function : Function without name

// example of Anonymous function : we are not saving this function in any memory location and 
setTimeout(function (){
    console.log('Hello Anonymous function');
},3000)
