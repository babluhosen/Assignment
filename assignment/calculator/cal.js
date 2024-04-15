/*
let cal1=10;
let cal2=20;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}
 function divide(a,b){
    return a/b;
} 

$("#add").click(function(){
   var num1 = parseInt($('#num1').val());
   var num2 = parseInt($('#num2').val());
   $('#result').html("Result: "+add(num1,num2));
   cal1+=add(num1,num2);
});

$("#subtract").click(function(){   
     if (isNaN(cal1)) {
         cal1=0;}
     var num1 = parseFloat(cal1);
     var num2 = parseInt($('#num3').val());
     $('#result').html("Result: "+subtract(num1,num2)+"<br>New total: "+Math.abs(subtract(num1,num2)));
     cal1=Math.abs(cal1)-subtract(num1,num2)
});

$("#multiply").click(function(){
    var num1 = parseFloat(cal1);
    var num2 = parseFloat($('#num4').val());
    if (isNaN(num1) || isNaN(num2)){
        alert('Please enter valid numbers');
    }else{
       $('#result').html("Result: "+multiply(num1,num2));  
       cal1 *= multiply(num1,num2)/parseInt(num2);     
    }                                       
});

$("#divide").click(function(){
    var num1 = parseFloat(cal1);
    var num2 = parseFloat($('#num5').val());
    if (num2==0){
        alert('Error! Division by zero is not allowed');
    } else {
        $('#result').html("Result: "+       divide(num1,num2));
        //cal1 /= Math.floor(divide(num1,num2));
        cal1 = divide(num1,num2).toFixed(2);
    }
});

console.log(cal1);
 console.log(cal2);
  console.log(add(cal1,cal2));
  console.log(subtract(cal1,cal2));
  console.log(multiply(cal1,cal2));
  console.log(divide(cal1,cal2));
 //Functions for mathematical operations

//Functions for mathematical operations
//Adding values to the 
*/
// Function to add two numbers
 /*function add(num1, num2) {
    return num1 + num2;
  }
  
  // Function to subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
   // Function to multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to divide two numbers
  function divide(num1, num2) {
    return num1/num2;
  } 
   
  
  // Example usage: Adding numbers
  /*const number1 = 10;
  const number2 = 5;
  const sum = add(number1, number2);
  console.log(`The sum of ${number1} and ${number2} is ${sum}`);
  // Example usage: Subtracting numbers
  const difference = subtract(number1, number2);
  console.log(`The difference of ${number1} and ${number2} is ${difference}`); 

   
// Example usage: Multipying numbers
const mNumber= multiply(number1, number2);
console.log(`The product of ${number1} and ${number2} is ${mNumber}`);

// Example usage: Dividing numbers
  const quotient = divide(number1, number2);
  console.log(`The quotient of ${number1} and ${number2} is ${quotient}`);

/*
Exercise: Write a JavaScript program that performs the following operations using functions:
- Addition
- Subtraction (Subtract one number from another)    
- Division (Divide one number by another)   

Instructions:
- Create three functions in your code: `add()`, `subtract()`, and `divide()`. Each function should take two parameters representing the
  */
function calculate(){   
    let number1 = parseInt(document.querySelector('[name=number1]').value);
    let operator = document.getElementById("operator").value;
    let number2 = parseFloat(document.querySelector('[name=number2]').value);
    
    if (isNaN(number1) || isNaN(number2)) {
        alert("One or both inputs are not numbers");
        return;
    }
    
    let result = 0;
    switch(operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            // prevent division by zero error
            if(number2 == 0 ){
                alert("You can't divide by zero!");
                return;
            }else{
                result = number1 / number2;
            }
            
    }
    document.getElementById("result").innerHTML = "Result: "+result;
}