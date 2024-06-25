function addNumber()
{
var number1 = prompt("Enter Number 1");
number1 = parseFloat(number1);
var number2 = prompt("Enter Number 2");
number2 = parseFloat(number2);
var sum = number1+number2;
document.getElementById('solve').innerHTML = "Result : "+ sum;
}
function subNumber()
{
var number1 = prompt("Enter Number 1");
number1 = parseFloat(number1);
var number2 = prompt("Enter Number 2");
number2 = parseFloat(number2);
var sub = number1-number2;
document.getElementById('solveSub').innerHTML = "Result : "+ sub;
}
function divNumber()
{
var number1 = prompt("Enter Number 1");
number1 = parseFloat(number1);
var number2 = prompt("Enter Number 2");
number2 = parseFloat(number2);
var sub = number1/number2;
document.getElementById('solveDiv').innerHTML = "Result : "+ sub;
}
function modNumber()
{
var number1 = prompt("Enter Number 1");
number1 = parseFloat(number1);
var number2 = prompt("Enter Number 2");
number2 = parseFloat(number2);
var sub = number1%number2;
document.getElementById('solveMod').innerHTML = "Result : "+ sub;
}