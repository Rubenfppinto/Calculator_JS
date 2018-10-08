var calculation = prompt ("Would you like regular or advanced calculation?").toLowerCase();
// var regular ["+","-","*","/"];
// var advanced
var num1;
var num2;
var exp;

if (calculation=="regular") {
  var regular = prompt("What type of regular calculation would you like to do? (+,-,/,*)");
  num1 = prompt("Introduce the first number");
  num2 = prompt("Introduce the second number");
  // If cycle for regular calculation
    if (regular=="+"){
      console.log(num1 + num2);
    } else if (regular=="-") {
        console.log(num1 - num2);
      } else if (regular=="/") {
          console.log(num1 / num2);
        }else {
            console.log(num1 * num2);
          }
//cycle for advanced calculation
} else {
    var advanced = prompt ("Would like to do Square root (Sroot) or Exponentiation (Exp)").toLowerCase();
    num1 = prompt ("What number do you want to use?");
    if (advanced=="exp") {
      console.log(Math.pow (num1, 2));
    }else {
        console.log (Math.sqrt(num1));
      }
    }
