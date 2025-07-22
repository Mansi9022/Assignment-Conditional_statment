// Question-Answers of js operators

//1] add two numbers and print the Result.(use +)
// let num1 = 24;
// let num2 = 11;
// let sum = num1 + num2;
// console.log("sum is",sum); 
// output: sum is:35


// 2]find the reminder when 17 is divided by 3.(use % )
// let dividend = 17;
// let divisor = 3;
// let remainder = dividend % divisor;
// console.log("Remainder is",remainder);

// Output: Remander is: 2

// 3]multiply 3 numbers:2,3,4.(use * )
// let num1 = 2;
// let num2 = 3;
// let num3 = 4;
// let product = num1*num2*num3;
// console.log("productroduct is",product);
// output: product is 24

// question4
// let num1=250;  
// let num2=100;
// let divider=5;
// let result= (num1-num2)/divider;   //250-100=150 , 150/5=30
// console.log("result is",result);
// output: result is 30

// question5
// let a= 5;
// let b=++a;         //it's pre inc
// console.log(a,b)  //first 5 inc by 1 ,so it becomes 6 and then b assigned the  new value is 6.
// output: 6 6


// question6
// let a=20;
// a+=10;
// console.log(a)
// output: 30

// question7
// let num=7;
// mun*=2;
// console.log("double value is",num);
// output: double value is 14


// question8
// let x=10; 
// x -= 3;           // it an subtraction assigment work like this x = 10-3
// console.log(x);
// output: 7

// question9
// let num1=7;
// let num2=7;
// let num3="7";
// console.log(num1==num2);  //op will be true because it have less equality (==)
// console.log(num1===num2); //op will be also true but it have more/strict equality(===)
// console.log(num1==num3); //op is true bc js has type coercion property. & less equality (==)
// console.log(num1===num3); //op is false bc of strict equality(===)

// question 10
// let num1=25;
// let num2=15;
// let isgreater = num1 > num2;
// console.log(isgreater);
// output: true

// question 11
//let num1=18;
// let num2=15;
// let isSmaller = num1 < num2;
// console.log("Is num1 smaller?"isSmaller);
// output: Is num1 smaller? false

//let num1=11;
// let num2=24;
// let isSmaller = num1 < num2;
// console.log("Is num1 smaller?"isSmaller);
// output: Is num1 smaller? true


// question 12
//consol.log(5 === "5")
// output is false because of strict equality (===) and also (5 is number and "5" is string) 

// question 13
// let num = 24;
// let isBetween = num > 10 && num < 50;
// console.log("Is the num between 10 and 50?",isBetween);
// output: "Is the num between 10 and 50? true                              // logical (&&AND) operator  returns true if both  operands are true . the num must be greater than 10 and less than 50 

// let num = 8;
// let isBetween = num > 10 && num < 50;
// console.log("Is the num between 10 and 50?",isBetween);
// output: "Is the num between 10 and 50? false


// question 14
// let num = 24;
// let isNUm = num < 10 || num > 100 ;
// console.log("Is the num less than 10 or greater than 100?",isBetween);
// output: "Is the num less than 10 or greater than 100? false                //logical (||) OR operator  returns true if at list one of the operands is true .

//let num = 110;
// let isNUm = num < 10 || num > 100 ;
// console.log("Is the num less than 10 or greater than 100?",isBetween);
// output: "Is the num less than 10 or greater than 100? true

//question 15
// let a=true;
// let b=false;
// console.log(a,b);               //both values are not same
//output : false

//question 16
// let value = true;
// let negativeValue = !value;
// console.log(negativeValue);
// output: false

//question 17
//  let num = 7;
//  let result = (num % 2 === 0)? "Even":"Odd";   //ternary operator (condition? expressionIFtrue:expressionIFfalse) is shortcut of if-else satatment. 
//  console.log(result)
// output: Odd

// let num1 = 24;
// let result1 = (num1 % 2 === 0)? "Even":"Odd";
// console.log(result1)
//output: 


//question 18
// let age = 18;
// let eligibility = (age>=18)? "Eligible for vote" : "Not eligible for vote";
// console.log(eligibility);
//output: Eligible for vote


// let age = 7;
// let eligibility  = (age>=18)? "Eligible for vote" : "Not eligible for vote";
// console.log(eligibility);
// output: not eligible for vote


//question 19
// let num1 = 11;
// let num2 = 24;
// let res= (num1>num2)? num1 : num2;
// console.log("the greater num is",res);
//output: the greater num is 24

// let num1 = 23;
// let num2 = 18;
// let res= (num1>num2)? num1 : num2;
// console.log("the greater num is",res);
//output: the greater num is 23


//question 20
// let x = 5;             
// let y = x++ + ++x;      //first it print x=5 then inc by 1 now the value of variable x is 6
                          // the value x=6 first it inc by 1 and then print , so it became 7.
// console.log(y);        // x++ = 5 , ++x = 7. 5+7= 12
// output: 12