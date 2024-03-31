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

