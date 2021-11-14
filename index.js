const kelvin = 0;
/* I wrote a variable called kelvin and I put equal a number */

const celsius = kelvin - 273;
/* I wrote another variable to change the degrees from kelvin to celsius*/

let fahrenheit = celsius * (9 / 5) + 32;
/* I wrote a formula to change from celsius to fahrenheit degrees */

fahrenheit = Math.floor(fahrenheit);
/* I wrote a method that covert every number in a decimal number */

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// convert to Newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
