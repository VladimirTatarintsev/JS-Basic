'use strict'
// 1
// let Tc = prompt("Введите температуру по Цельсию");
// alert("Температура по Фаренгейту " + Math.ceil(Number((9 / 5) * Tc + 32)));

// 2
// let name = "Василий";
// let admin = name;
// alert(admin);

// 3
// Ну и хули тут объяснять?)) числа складываются, потом 20 преобразуется в строку и конкатенируется с другой строкой
// console.log(10 + 10 + "10");
// такая же хуйня, преобразуется и конкатенируется ответ: 101010
// console.log(10 + "10" + 10);
// здесь чуть по другому, последнее преобразуется в намбер и складываются, ответ очевиден
// console.log(10 + 10 + +"10");
// пустая стринга преобразуется в 0, делим на -0 получаем отрицательную инфинити 
// console.log(10 / -"");
// ну тут все понятно, унарный оператор преобразует в число, ответ 4....А хрен там, ответ NaN, я не увидел, что тут запятая, а не точка, была бы точка ответ был бы 4
// console.log(10 / +"2,5");

// 4  async - можем загружать скрипт паралельно с html, не имеет смысла использовать если скрипт расположен перед закрывающимся тегом боди,
// короч интерпретатор доходя до скрипта не тормозит загрузку страницы.
// defer - скрипт выполняется после загрузки страницы, даже если скрипт загрузился раньше

// 5 
// let ticket = +prompt("Введите шестизначный номер билета");

// let lastNumber = ticket % 10;
// let fifthNumber = Math.floor(ticket / 10) % 10;
// let fourthNumber = Math.floor(ticket / 100) % 10;
// let thirdNumber = Math.floor(ticket / 1000) % 10;
// let secondNumber = Math.floor(ticket / 10000) % 10;
// let firstNumber = Math.floor(ticket / 100000) % 10;

// let firstPart = firstNumber + secondNumber + thirdNumber;
// let secondPart = fourthNumber + fifthNumber + lastNumber;

// if (firstPart === secondPart) {
// 	alert("Поздравляем! Вы обладатель счастливого билета")
// } else alert ("Лососни тунца лошара")


// ДЗ 2

//1 Объясните почему код даёт именно такие результаты?
// let a = 1, b = 1, c, d;

//  c = ++a;
//  alert(c); // 2  изначально c пустая, а=1, в с присваивается а+1, то есть 2

//d = b++;
//alert(d); // 1 тут по-другому чутка, в d записывается сначала b то есть 1, а потом уже увеличивается на 1 и в b перезаписывается значение

//c = 2 + ++a;
//alert(c); // 5 а уже перезаписалась и имеет значение 2, соответственно а увеличивается на 1 т.е. становится 3 и плюсуется с 2

//d = 2 + b++;
//alert(d); // 4 та же ситуевина, только в b меняется значение и становится 3

//alert(a); // 3 ну тут уже выше написал почему так
//alert(b); // 3 ну тут уже выше написал почему так


// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий).
// let a = 2;
// let x = 1 + (a *= 2); тут умножается и присваивается в а 2 * 2 = 4
// a = 4, x = 5


//3 
// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");


// if ((a >= 0) && (b >= 0)) {
// 	alert(a - b)
// } else if ((a < 0) && (b < 0)) {
// 	alert(a * b)
// } else {
// 	alert(a + b) 
// };

//4
// function sum (a, b) {
// 	return a + b
// }
// console.log(sum(4, 6));

// const subtraction = function (a, b) {
// 	return a - b
// }
// console.log(subtraction(15, 60));

// const multiply = (a, b) => {
// 	return a * b
// }
// console.log(multiply(15, 5));

// const division = (a, b) => {
// 	return a / b
// }
// console.log(division(15, 5));

//5
// function mathOperation(arg1, arg2, operation) {
// 	let result
// 	switch (operation) {
// 		case 'sum':
// 			result = arg1 + arg2;
// 			break;
// 		case 'subtraction':
// 			result = arg1 - arg2
// 			break;
// 		case 'multiply':
// 			result = arg1 * arg2
// 			break;
// 		case 'division':
// 			result = arg1 / arg2
// 			break;
// 	}
// 	return result
// }
// console.log(mathOperation(69, 9, 'multiply'))

//6

// function sumOperation() {
// 	let sum = +prompt('Введите сумму которую хотите внести', '0');
// 	let lastNum = sum % 100;

// 	let result = '';

// 	if (lastNum % 10 === 1) {
// 		 result = `Ваша сумма в ${sum} рубль успешно зачислена`
// 	} else if (lastNum > 1 && lastNum < 5) {
// 		 result = `Ваша сумма в ${sum} рубля успешно зачислена`
// 	} else {
// 		 result = `Ваша сумма в ${sum} рублей успешно зачислена`
// 	}

// 	return result;
// }

// alert(sumOperation());

//ДЗ 3
//1 
// let i = 0; 
// do {
// 	if (i < 1) {
// 		console.log(`${i} - это ноль`);
// 	} else if (i % 2) {
// 		console.log(`${i} - это нечетное число`);
// 	} else {
// 		console.log(`${i} - это четное число`);
// 	}
// 	i++
// } while (i < 11);

//2
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

//3
// for (let i = 0; i < 20; i++ ) {
// 	let x = "";
// 	for ( let y = 0; y <= i; y++)
// 	if (y < 1 ) {
// 		x = "*"
// 	} else {
// 		x += "**"
// 	}
//  	console.log(x);
// }

//4
// let i = 0;
// while (i < 100) {
// 	if (isPrimeNumber(i)) {
// 		console.log(i);
// 	}
// 	i++
// }

// function isPrimeNumber (num) {
// 	if (num < 2) {
// 		return false
// 	}
// 	for (let i = 2; i <= Math.sqrt(num); i++) {
// 		if (num % i === 0) {
// 			return false
// 		}
// 	}
// 	return true
// }

//5
// const arr = [
// 	[2, 4, 6],
// 	[1, 5, 10],
// 	[7, 4, 1],
// ]

// function getSumValues (arr) {
// 	return arr.reduce(function(a, b) {
// 		return a + b
// 		}
// 	);
// }

// let maxSumOfArrayIndex = 0;
// let maxSumOfArray = getSumValues(arr[maxSumOfArrayIndex]);

// for (let i = 1; i < arr.length; i++) {
// 	if (getSumValues(arr[i]) > maxSumOfArray) {
// 		maxSumOfArrayIndex = i;
// 		maxSumOfArray = getSumValues(arr[i])
// 	}
// }
// console.log(maxSumOfArrayIndex);
// console.log(maxSumOfArray);

//ДЗ 4

//1
// let num = +prompt("Введите целое число от 0 до 999");
// function isInteger (num) {
// 	let obj = {};
// 	if ((Number.isInteger(num)) === true) {
// 		obj = num;
// 	} else obj = `${JSON.stringify(obj)}. Ошибка. Введено некорректное значение.`;
// 	return obj
// }
// function getDigitsOfNum (num) {
// 	let digitNum = null;
// 	if (isInteger(num) >= 0 && isInteger(num) <= 999) {
// 		digitNum = {
// 			firstDigit: isInteger(num) % 10 || 0,
// 			secondDigit: Math.floor(isInteger(num) / 10) % 10 || 0, 
// 			thirdDigit: Math.floor(isInteger(num) / 100) % 10 || 0
// 		};
// 	} else digitNum = isInteger();
// 	return digitNum
// }
// console.log(getDigitsOfNum(num))

//2
const options = {
	rowsCount: 15,
	columnsCount: 15,
};