//JavaScript Control Structures - Practice Questions

//========= 1. Ternary Operator (?:)=========//

//Q1. Take a number from the user and check whether it is even or odd using the ternary operator.

// let number = prompt("Enter a number");
// let result  = (number % 2 === 0)? "It's a even number :" : "It's an odd number:";
// console.log(result,number);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Q2.Check whether a user is eligible to vote (age >= 18) using the ternary operator.

// let age = prompt("Enter your age");
// let eligiblety  = (age>=18)? "Your eligible for vote.":"Yuor not eligible for vote.";
// console.log(eligiblety);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Q3.Take two numbers and print the greater one using the ternary operator.

// let num1 = 51;
// let num2 = 24;
// let res= (num1>num2)? num1 : num2;
// console.log("The greater num is",res);

 //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q4.Check if a number is divisible by 5 using the ternary operator.

// let num = 20;
// let result = (num/5)? "Number is divisible by 5.":"Number is not divisible by 5.";
// console.log(result);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5. Take a character input and check whether it's a vowel or consonant using ternary logic.

// let char = 'a';
// let vowelOrConsonant =(char==='a'||char==='e'||char==='i'||char==='o'||char==='u')?"Character is vowel.":"Character is Consonant.";
// console.log(vowelOrConsonant);


// ===============================================     2. Nested if else     ==============================================================================================================================================



// Q1. Take a number and check if it's positive, negative, or zero using nested if else.

// let num = 99;
// if(num>=0){
//     if(num==0){
//         console.log("Number is zero.");
//     }else{
//         console.log("number is positive.");
//     }
// }   
//  else{
//     console.log("Number is negative.");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//Q3. Take three numbers and print the largest among them using nested if else.

// let char = 's';

// if(char >= 'a' && char <= 'z'){
//     if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
//         console.log("Character is vowel.");
//     }else{
//         console.log("It's a letter but not a vowel.");
//     }
// }else{
//     console.log("Error! It's not a letter.");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q4.Take a number and check if it's even. If yes, check if it's divisible by 4.

// let number = 24;

// if (number%2==0){
//     if(number%4==0){
//         console.log("The number is even and divisible by 4.");
//     }else{
//         console.log("The number is even and not divisible by 4.");
//     }
// } else {
//     console.log("The number is odd.");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// q5.Take marks of 3 subjects and print grade: A (>=90), B (>=75), C (>=50), else Fail.

// let sub1Marks = 58;
// let sub2Marks = 20;
// let sub3Marks = 24;
// let totalMarks = sub1Marks+sub2Marks+sub3Marks;

//  if (totalMarks >= 90) {
//         console.log("You got 'A' grade.");
//     } else {
//         if (totalMarks >= 75) {
//            console.log("You got 'B' grade."); 
//         } else {
//             if (totalMarks >= 50) {
//                 console.log("You got 'C' grade.");
//             } else {
//                 console.log("Your Fail.");
//             }
//         }
//     }



// ===============================================      3. else if Ladder     ==============================================================================================================================================



// q1. Input a day number (17), print the corresponding day name using else if.

// let day = 6;

// if(day==1){
//     console.log("Sunday.");
// }else if (day==2){
//     console.log("Monday.");
// }else if(day==3){
//     console.log("Tuesday.");
// }else if(day==4){
//     console.log("Wednesday.");
// }else if(day==5){
//     console.log("Thrusday.");
// }else if(day==6){
//     console.log("Friday.");
// }else if(day==7){
//     console.log("Saturday.");
// }else{
//     console.log("Invalid Day");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2. Input marks (0100), assign grade: A, B, C, D, or F using else if.

// let marks = 95;

//  if(marks==100){
//      console.log(" Grade:'A'.");
//  }else if(marks>=90){
//      console.log("Grade:'B'.");
//  }else if(marks>=75){
//     console.log("Grade:'C'.");
//  }else if(marks>=50){
//      console.log("Grade:'D'.");
//  }else{
//      console.log("Grade:'F'");
//  }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3. Input month number (112), print the number of days in that month.

// let month = 11;

// if(month==1){
//      console.log("30 days.");
// }else if(month==2){
//     console.log("29 days.")
// }else if(month==3){
//     console.log("31 days.")
// }else if(month==4){
//     console.log("31 days.")
// }else if(month==5){
//     console.log("30 days.")
// }else if(month==6){
//     console.log("31 days.")
// }else if(month==7){
//     console.log("31 days.")
// }else if(month==8){
//     console.log("30 days.")
// }else if(month==9){
//     console.log("31 days.")
// }else if(month==10){
//     console.log("31 days.")
// }else if(month==11){
//     console.log("30 days.")
// }else if(month==12){
//     console.log("31 days.")
// }else{
//     console.log("Invalid month.")
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Q4. Input temperature and display message: Very Hot (>=40), Hot (>=30), Warm (>=20), Cold (>=10), Very Cold (<10).

// let temperature = 24;

// if (temperature>=40){
//     console.log(" Very Hot temperature.");
// }else if (temperature>=30){
//     console.log(" Hot temperature.");
// }else if (temperature>=20){
//     console.log("Warm temperature.");
// }else if (temperature>=10){
//     console.log(" Cold temperature.");
// }else {
//     console.log("Very Cold temperature.");
// }
        
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5.Input a number and check: If divisible by 2 and 3, only 2, only 3, or neither

// let num = 11;

// if (num % 2==0 && num % 3 == 0){
//     console.log("num is divisible by 2 and 3.");
// } else if(num % 2 == 0){
//     console.log("num is divisible by only 2.");
// }else if( num % 3 == 0){
//     console.log("num is divisible by only 3.");
// }else{
//     console.log("num is not divisible.");
// }

   
//==================================   JavaScript Operator Practice - Programming Questions  =======================================//

// Q1.Swap Two Numbers Without Using a Third Variable  Use only arithmetic and assignment operators.

// let a = 10;
// let b = 20;

// a = a+b;  //20+10=30
// b = a-b;  //30-20=10
// a = a+b;  //30+10=20

// console.log(a,b);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2.Check If a Number is Even or Odd  Use the modulus (%) operator and logical operators,  using if 

// let num = 4;

// if(num%2==0){
//     console.log("num is even");
// }else{
//     console.log("num is odd");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3. Find the Maximum of Three Numbers use  only comparison and logical operators.

//  let num1 = 24;
//  let num2 = 19;
//  let num3 = 35;
 
// if(num1 >= num2 && num1 >= num3){
//        console.log("maximum num is",num1);
//  } else if(num2>=num1&&num2>=num3){
//     console.log("maximum num is",num2);
// } else{
//     console.log("maximum num is",num3);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// q4.Check if a Character is a Vowel or Consonant  Use logical (||) and comparison (==) operators.

//  let char = 'm'; 
//  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {      //the the con check if char==a,e,i,o,u then print char is vowel else print char is a const
//       console.log(" char is a vowel=",char);
//   }  
//  else if  (char >= 'a' && char <= 'z') {                                         //this also check char is between (a-z) or not
//      console.log("char is a consonant=",char);
//  } 
//else {
//    console.log(" char is not an alphabet=",char);                                //if it's not then it will print char is not an alphabet
//}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5. Return true Only if Both Inputs Are Non-Zero Numbers   Use logical AND (&&) operator.

// let a = 7;
// let b = 11;

// if(a && b){
//     console.log("True");
// }else{
//     console.log("False");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q6. Check if a Number Lies Between Two Given Number  Use only < and > operators (use if )

// let num = 24;
// let num1 = 1;
// let num2 = 100;

// if(num > num1 && num < num2){
//     console.log("number lies between given number");
// }else{
//     console.log("number did not lies between given number");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q7. Evaluate the Result of Postfix and Prefix Operators
//    let a = 5;
//    let b = a++ + ++a;
   // What are the values of a and b?

   // console.log(" a =",a);     //expect 7
// console.log(" b =",b);      // expect 12    

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Q8.  Predict the Output Using Logical Operators
//     let x = 0;
//     let y = 10;
//     let result1 = x && y;

// let x = 0;                     
// let y = 10;          
// let result1= x && y;
// let result2 = x|| y;       

// console.log("result1 =",result1);    //0
// console.log("result2 =",result2);    //10

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q9. Calculate Square of a Number Using Assignment Operator   Use *= operator only.

// let num = 7;

// if(num === 0){
//     console.log("square is 0");
// }else{    
//     num *= num;
//     console.log("squre is",num);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q10. Write a Simple Calculator Function   That takes two numbers and an operator (+, -, *, /, %) and returns the result.

// function simpleCalculator(num1, num2, operator) {
//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             return "Error: Number is not divisible by zero.";
//         }
//     } else if (operator === '%') {
//         result = num1 % num2;
//     } else {
//         return "Error: Invalid operator.";
//     }

//     return result;
// }


// console.log(simpleCalculator(10, 5, '+')); // Output: 15
// console.log(simpleCalculator(10, 5, '/')); // Output: 2
// console.log(simpleCalculator(10, 0, '/')); // Output: Error: Division by zero is not allowed.
// console.log(simpleCalculator(10, 5, '^')); // Output: Error: Invalid operator.


