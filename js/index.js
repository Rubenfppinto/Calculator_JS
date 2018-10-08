var calculation = prompt ("Would you like regular or advanced calculation? (use lower case letters)").toLowerCase();
// var regular ["+","-","*","/"];
// var advanced
var num1;
var num2;

if (calculation=="regular") {
  var regular = prompt("What type of calculation would you like to do? (+,-,/,*)");
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
  var advanced
    if ()
}
