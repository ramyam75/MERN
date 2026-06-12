var a =10
var b=20
//Addition
console.log (a+b);
//subtraction
console.log (a-b);
//multiplication
console.log (a*b);
//division
console.log (a/b);
//modulus
console.log (a%b);
//exponentiation
console.log (a**b);

//assignment operators
console.log (a+=20);
console.log (a-=b);
console.log (a*=b);
console.log (a/=b);
console.log (a%=b);
console.log (a**=b);

//comparison operators
console.log (a==b);
console.log (a!=b); 
console.log (a>b);
console.log (a<b);
console.log (a>=b);
console.log (a<=b); 

//Logical Operators
console.log("Logical Operators");
console.log(a>5 && b>5);
console.log(a<5 && b<5);
console.log(a<5 || b<5);
console.log(a>5 || b<5);
console.log(!(a>5));

//unary operators
console.log("Unary Operators");
console.log(++a);
console.log(--b);
console.log(a++);
console.log(b--);

//ternary operator
console.log("Ternary Operator");
var result = (a > b) ? "a is greater than b" : "b is greater than a";
console.log(result);
