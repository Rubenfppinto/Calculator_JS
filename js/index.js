var num1;
var num2;
var calculation = prompt ("Would you like regular or advanced calculation?").toLowerCase();

if (calculation=="regular") {
  var regular = prompt("What type of regular calculation would you like to do? (+,-,/,*)");
  // If cycle for regular calculation
    if (regular=="+"){
        num1 = parseInt(prompt("Introduce the first number"));
        num2 = parseInt(prompt("Introduce the second number"));
        console.log(num1 + num2);
    } else if (regular=="-") {
        num1 = parseInt(prompt("Introduce the first number"));
        num2 = parseInt(prompt("Introduce the second number"));
        console.log(num1 - num2);
      } else if (regular=="/") {
          num1 = parseInt(prompt("Introduce the first number"));
          num2 = parseInt(prompt("Introduce the second number"));
          if (num2==0){
            console.log ("Operation not possible. Cannot divide by 0")
          } else {
            console.log(num1 / num2);
          }
          }else if (regular==""*"") {
              num1 = parseInt(prompt("Introduce the first number"));
              num2 = parseInt(prompt("Introduce the second number"));
              console.log(num1 * num2);
            }else {
            //Message shown if input is wrong
              console.log ("Wrong input. Try again and read instructions carefully!");
            }
//cycle for advanced calculation
} else if (calculation=="advanced"){
      var advanced = prompt ("Would like to do Square root (Sroot) or Exponentiation (Exp)").toLowerCase();
      if (advanced=="exp") {
        num1 = prompt ("What number do you want to use?");
        console.log(Math.pow (num1, 2));
      }else if (advanced=="sroot"){
          num1 = prompt ("What number do you want to use?");
          console.log (Math.sqrt(num1));
        } else {
          //Message shown if input is wrong
          console.log ("Wrong input. Try again and read instructions carefully!");
        }
}else {
    //Message shown if input is wrong
    console.log ("Wrong input. Try again and read instructions carefully!");
      }
