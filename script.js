/// Question-Answers of js operators

//--------------------21/7/25----------------------------//


//1] add two numbers and print the Result.(use +)

// let num1 = 24;
// let num2 = 11;
// let sum = num1 + num2;
// console.log("sum is",sum); 
// output: sum is:35

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 2]find the reminder when 17 is divided by 3.(use % )

// let dividend = 17;
// let divisor = 3;
// let remainder = dividend % divisor;
// console.log("Remainder is",remainder);

// Output: Remander is: 2

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3]multiply 3 numbers:2,3,4.(use * )

// let num1 = 2;
// let num2 = 3;
// let num3 = 4;
// let product = num1*num2*num3;
// console.log("productroduct is",product);
// output: product is 24

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question4 ( Subtract 100 from 250 and divide the result by 5. (Use - and / operators)

// let num1=250;  
// let num2=100;
// let divider=5;
// let result= (num1-num2)/divider;   //250-100=150 , 150/5=30
// console.log("result is",result);
// output: result is 30

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question5 ( Subtract 100 from 250 and divide the result by 5. (Use - and / operators)

// let a= 5;
// let b=++a;         //it's pre inc
// console.log(a,b)  //first 5 inc by 1 ,so it becomes 6 and then b assigned the  new value is 6.
// output: 6 6

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question6 ( Use += operator to add 10 to a variable initialized as 20.)

// let a=20;
// a+=10;
// console.log(a)
// output: 30

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question7 ( Use *= to double the value of a variable initialized as 7.)

// let num=7;
// mun*=2;
// console.log("double value is",num);
// output: double value is 14

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question8 ( What will be the output?
//    What will be the output?
//    let x = 10;
//    x -= 3;
//    console.log(x);

// let x=10; 
// x -= 3;           // it an subtraction assigment work like this x = 10-3
// console.log(x);
// output: 7

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question9 (Check if two numbers are equal using == or ===.)

// let num1=7;
// let num2=7;
// let num3="7";
// console.log(num1==num2);  //op will be true because it have less equality (==)
// console.log(num1===num2); //op will be also true but it have more/strict equality(===)
// console.log(num1==num3); //op is true bc js has type coercion property. & less equality (==)
// console.log(num1===num3); //op is false bc of strict equality(===)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question 10[Check if 25 is greater than 15 using > operator.]

// let num1=25;
// let num2=15;
// let isgreater = num1 > num2;
// console.log(isgreater);
// output: true

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question 11 [ Compare two numbers and print true if the first is smaller.]

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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 12 [ What is the output?  console.log(5 === "5");]

//consol.log(5 === "5")
// output is false because of strict equality (===) and also (5 is number and "5" is string) 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// question 13 [Check if a number is between 10 and 50 using && operator]

// let num = 24;
// let isBetween = num > 10 && num < 50;
// console.log("Is the num between 10 and 50?",isBetween);
// output: "Is the num between 10 and 50? true                              // logical (&&AND) operator  returns true if both  operands are true . the num must be greater than 10 and less than 50 

// let num = 8;
// let isBetween = num > 10 && num < 50;
// console.log("Is the num between 10 and 50?",isBetween);
// output: "Is the num between 10 and 50? false

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 14 [Check if a number is less than 10 or greater than 100 using || operator.]

// let num = 24;
// let isNUm = num < 10 || num > 100 ;
// console.log("Is the num less than 10 or greater than 100?",isBetween);
// output: "Is the num less than 10 or greater than 100? false                //logical (||) OR operator  returns true if at list one of the operands is true .

//let num = 110;
// let isNUm = num < 10 || num > 100 ;
// console.log("Is the num less than 10 or greater than 100?",isBetween);
// output: "Is the num less than 10 or greater than 100? true

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//question 15 [ What is the output?   let a = true;   let b = false;   console.log(a && b);]

// let a=true;
// let b=false;
// console.log(a,b);               //both values are not same
//output : false

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//question 16 [ Negate a boolean value using ! operator. Print the opposite of true.]

// let value = true;
// let negativeValue = !value;
// console.log(negativeValue);
// output: false

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//question 17 [ Check if a number is even or odd using the ternary operator.]

//  let num = 7;
//  let result = (num % 2 === 0)? "Even":"Odd";   //ternary operator (condition? expressionIFtrue:expressionIFfalse) is shortcut of if-else satatment. 
//  console.log(result)
// output: Odd

// let num1 = 24;
// let result1 = (num1 % 2 === 0)? "Even":"Odd";
// console.log(result1)
//output: even

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//question 18 [ Check eligibility to vote using ternary. (age >= 18)]

// let age = 18;
// let eligibility = (age>=18)? "Eligible for vote" : "Not eligible for vote";
// console.log(eligibility);
//output: Eligible for vote


// let age = 7;
// let eligibility  = (age>=18)? "Eligible for vote" : "Not eligible for vote";
// console.log(eligibility);
// output: not eligible for vote

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//question 19 [Find the greater of two numbers using the ternary operator.]

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

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//question 20 [Predict the output:   let x = 5;   let y = x++ + ++x;   console.log(y)]


// let x = 5;             
// let y = x++ + ++x;            //first it print x=5 then inc by 1 now the value of variable x is 6
                                // the value x=6 first it inc by 1 and then print , so it became 7.
// console.log(y);              // x++ = 5 , ++x = 7. 5+7= 12
// output: 12



// //--------------------------22/7/25------------------------------//


// //Question 1 ( Swap Two Numbers Without Using a Third Variable  use only arithmetic and assignment operators)

// let a= 5;
// let b = 10;
// console.log("Before swap:a=",a,",b=",b);

// a=a+b;                               //a=5+10 = 15  a becomes 15
//b=a-b;                              //b=15-10 = 5  b became 5
//a=a+b;                               //a=15-5 = 10
// console.log("After swap:a=",a,",b=",b);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Question 2( Check If a Number is Even or Odd  Use the modulus (%) operator and logical operators, without using if or ternary (? :))

// let num = 7;                      // if the num % 2 is (remainder)0, it's even num. if it 1 or non-zero,it's odd//the boolean data type convert 0 into false and 1 into true .
// let  isEven = !(num%2);           // using Not op it convert true into false & false into true , so it will print (true if even,false if odd )
// let isOdd = !!(num%2);            // true if odd & false if even 

// console.log("num is Even:",isEven);
// console.log("num is Odd:",isOdd);

// output: num is Even:false         //7%2 = 1 in boolean it's true, but i use not(!) op then it converts 1 into 0 (false) it's 0dd num.
// output: num is Odd:true           // here it will convert  the first ans 0 into 1(true) bc i uses (!!) not op ,then it will be an even num.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 3( Find the Maximum of Three Numbers  Use only comparison and logical operators.)

// let num1 = 24;
// let num2 = 19;
// let num3 = 35;
// let max = num1;
// max = (num2 > max && num2) || max;    //if num2 > max, then max = num2 , else it max = num1.it still remains max=num1 bc num2 < num1
// max = (num3 > max && num3) || max;    //same
// console.log("the maximum num is:",max);  

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//  4. Write a Simple Calculator Function That takes two numbers and an operator (+, -, *, /, %) and returns the result

// let calculator = function (num1, num2, operator) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
//         case '%':
//             return num2 !== 0 ? num1 % num2 : 'Error: Division by zero';
//         default:
//             return 'Error: Invalid operator';
//     }
// };
// // Examples
// console.log(calculator(20, 4, '+'));
// console.log(calculator(20, 9, '-'));
// console.log(calculator(9, 2, '*'));
// console.log(calculator(20, 4, '/'));
// console.log(calculator(20, 4, '%'));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 5 ( Check if a Character is a Vowel or Consonant  Use logical (||) and comparison (==) operators)

//  let char = 'm'; 
//  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {      //the the con check if char==a,e,i,o,u then print char is vowel else print char is a const
//       console.log(" char is a vowel=",char);
//   }  
//  else if  ((char >= 'a' && char <= 'z')) {                                         //this also check char is between (a-z) or not
//      console.log("char is a consonant=",char);
//  } 
//else {
//    console.log(" char is not an alphabet=",char);                                //if it's not then it will print char is not an alphabet
//}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 6 ( Calculate Square of a Number Using Assignment Operator   Use *= operator only.)

// let num = 8;
// num *= num;
// console.log("Square of the num:",num)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 7 ( Return true Only if Both Inputs Are Non-Zero Numbers  Use logical AND (&&) operator.)

//  let a = 5;
//  let b = 10;
//  let result = !!(a&&b);     //if both are true print true. !! convert res into (true/false).
//  console.log(result);      //true

//  let a = 24;
//  let b = 0;
//  let result = !!(a&&b); 
//  console.log(result);       //false

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 8 (Check if a Number Lies Between Two Given Numbers Use only < and > operators (no if or function))

// let num = 7;
// let num1 = 5;
// let num2 = 10;
// let isBetween = (num > num1 && num < num2);
// console.log("Number is btn num1 and num2:",isBetween);  //true

// let num = 24;
// let num1 = 5;
// let num2 = 10;
// let isBetween = (num > num1 && num < num2);
// console.log("Number is btn num1 and num2:",isBetween);  //false

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 9 (Evaluate the Result of Postfix and Prefix Operators
   //let a = 5;
   //let b = a++ + ++a;
   // What are the values of a and b?)

// let a = 5;
// let b = a++ +  ++a;       // postfix is(first the value is print and then inc/dec the value) let b=a++ {op:5,6}  &  prefix is (the value is inc/dec first and then updated value return to variable) let b=++a {op:6,6}
                          
// console.log(" a =",a);     //expect 7
// console.log(" b =",b);      // expect 12     

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// question 10 ( Predict the Output Using Logical Operators
//     let x = 0;
//     let y = 10;
//     let result1 = x && y;
//     let result2 = x || y;
    // What are result1 and result2)  

// let x = 0;                     
// let y = 10;                    //in boolean 0 is false and 1 is true
// let result1 = x && y;         //it will return the false value bc the && op return true if both values are true other wise return false value
// let result2 = x || y;         // x=0 is false value then it moves to next operand and check y(10)=true , so it return true value bc if there's at least one of value is true then (||) op rtn true value

// console.log("result1 =",result1);    //0
// console.log("result2 =",result2);    //10

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// take input from user as a number and check if the num is positive  either zero or negative           

// let number = prompt("Enter a number:");

// if (number > 0 || number === 0) {                    
//     console.log("The number is positive either zero.",number);
// }  else  {
//     console.log("The number is  negative.",number);
// } 


///--------------------23/7/25----------------------------//

//Q1. Write a program to take a number from the user and check whether it is even or odd.
// let num = prompt("Enter a number");

// if(num%2==0){
//     console.log("Given number is even :",num);
// } else {
//     console.log("Given number is odd:",num)
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2.Ask the user to input a number and check if it's positive, negative, or zero.

// let number = prompt("Enter a number:");

//  if (number > 0 ) {                    
//     console.log("The number is positive:",number);
//  }  else if (number < 0) {
//      console.log("The number is negative",number);
//  } else {
//     console.log("The number is zero:",number)
//  }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3.Take a single alphabet as input and check whether it's a vowel or a consonant.(Hint: vowels = a, e, i, o, u)

// let char= 'm';
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     console.log("char is vowel:",char);
// }else{
//     console.log("char is constant:",char);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q4. Take two numbers as input and print the greater number.

// let num1 = 50;
// let num2 = 50 ;
// if (num1>num2) {
//     console.log("greater num is:",num1);
// } else if(num1<num2) {
//     console.log(" greater num is:",num2);
// } else {
//     console.log("both numbers are equal:",num1,num2);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5.Take marks (0–100) as input and print the grade based on: =90 → A> =75 and <90 → B> =50 and <75 → C<50 → Fail

// let marks = 48;
// if (marks>=90){
//     console.log(" you got 'A' grade:",marks);
// } else if (marks>=75 ){
//     console.log("you got 'B' grade:",marks);
// } else if (marks>=50 ){
//     console.log("you got 'c' grade:",marks);
// } else if (marks<50 ){
//     console.log("you are failed",marks);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q6.Ask the user to enter a year and check if it's a leap year or not.(Leap year rule: divisible by 4 and not 100, or divisible by 400)

// let year = prompt("Enter year")
// if(year % 4=== 0 || year % 400 === 0 ){
//     console.log("It's a leap year.");
// } else {
//     console.log("It's not a leap year.");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q7.Take age as input and check if the user is eligible to vote (age ≥ 18).

// let age = 18;
// if (age>=18){
//     console.log("your eligible for vote.");
// } else {
//     console.log("yuor not eligible for vote");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q8.Take an integer input and print its absolute value.(If negative, convert it to positive)

// negative to positive
// let num = -24;
//  if (num < 0) { 
//         num = (-1) * num;                            //(-1)*(-24)= +24
//         console.log("absolute value is:",num);
// } else {
//         console.log(num); 
// } 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q9.Take three angles as input. Check if they form a valid triangle (sum = 180).Then check the type of triangle:All angles equal → EquilateralAny two equal → Isosceles All different → Scalene

//  let a = 60;
//  let b = 70;
//  let c = 60;
//  if ( a === b && b === c && a === c){
//      console.log("It's valid triangle and the type of triange is equilateral");
// } else if (a === b || b === c || a === c){
//     console.log("It's invalid triangle and the type of triange is isosceles");
//  } else if( a !== b && b !== c && a !== c ){
//     console.log("It's invalid triangle and the type of triange is scalene");
//  } 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q10. Take three numbers from the user and print the smallest one using only if and if-else

// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a number");
// let num3 = prompt("Enter a number");
// let smallest;
// if (num1 <= num2 && num1 <= num3) {
//     smallest = num1;
// } else if (num2 <= num1 && num2 <= num3) {
//     smallest = num2;
// } else {
//     smallest = num3;
// }
// console.log("The smallest number is:", smallest);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
