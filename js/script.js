<<<<<<< HEAD
let result;
result = true + false; // 1+0=1
result = "5" + 15 + 3; // ('5'+15)+3='515'+3='5153'
result = 5 + 1 + "px"; // 6+'px'='6px'
result = null + 1; // 0+1=1
result = 3 - '1'; // 3-1=2
result = '8' * '2'; // 8*2=16
result = true * 5; // 1*5=5
result = 7 / false; // 7/0=Infinity
=======
const firstNumber = +prompt("Введите первое число");
const secondNumber = +prompt("Введите второе число");

console.log(`Результат умножения ${firstNumber} и ${secondNumber}: ${firstNumber * secondNumber}`);
console.log(`Результат деления ${firstNumber} и ${secondNumber}: ${(firstNumber / secondNumber).toFixed(2)}`);
console.log(`Результат суммирования ${firstNumber} и ${secondNumber}: ${firstNumber + secondNumber}`);
console.log(`Результат вычитания ${firstNumber} и ${secondNumber}: ${firstNumber - secondNumber}`);

const price = 26.5;
const taxRate = 0.082;
const finalPrice = price + price * taxRate;
console.log(`Цена товара: ${price}`);
console.log(`Налоговая ставка: ${taxRate}`);
console.log(`Окончательная стоимость товара с учетом налога: ${finalPrice.toFixed(2)}`);

let a = 3;
console.log(a);
let b = 2;
console.log(b);
a = a ** b;
console.log(a);
a **= b;
console.log(a)
>>>>>>> test
