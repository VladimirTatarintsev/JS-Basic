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
// const options = {
// 	rowsCount: 10,
// 	columnsCount: 10,
// 	startPositionX: 2,
// 	startPositionY: 6,
// };

// const player = {
// 	x: null,
// 	y: null,

// 	init(startX, startY) {
// 		this.x = startX;
// 		this.y = startY;
// 	},

// 	move(nextPoint) {
// 		this.x = nextPoint.x,
// 		this.y = nextPoint.y
// 	},

// 	getNextPosition(direction) {
// 		const nextPosition = {
// 			x: this.x,
// 			y: this.y,
// 		};
// 		switch (direction) {
// 			case 1:
// 				nextPosition.y++;
// 				nextPosition.x--;
// 				break;
// 			case 2:
// 				nextPosition.y++;
// 				break;
// 			case 3:
// 				nextPosition.y++;
// 				nextPosition.x++;
// 				break;
// 			case 4:
// 				nextPosition.x--;
// 				break;
// 			case 6:
// 				nextPosition.x++;
// 				break;
// 			case 7:
// 				nextPosition.y--;
// 				nextPosition.x--;
// 				break;
// 			case 8:
// 				nextPosition.y--;
// 				break;
// 			case 9:
// 				nextPosition.y--;
// 				nextPosition.x++;
// 				break;
// 		}
// 		return nextPosition;
// 	}
// };

// const walkyQuest = {
// 	options,
// 	player,

// 	run() {
// 		this.player.init(this.options.startPositionX, this.options.startPositionY);
		
// 		while (true) {
// 			this.render();

// 			const direction = this.getDirection();
			
// 			if (direction === -1) {
// 				alert('До свидания.');
// 				return;
// 			}
		
// 			const nextPoint = this.player.getNextPosition(direction);

// 			if (this.canPlayerMakeStep(nextPoint)) {
// 				this.player.move(nextPoint);
// 			}
// 		}
		
// 	},
// 	render() {
// 			let field = "";
// 			for (let i = 0; i < this.options.rowsCount; i++) {
// 				for (let j = 0; j < this.options.columnsCount; j++) {
// 					if (this.player.x === j && this.player.y === i) {
// 						field += "O "
// 					} else field += "X ";
// 				}
// 				field += "\n";
// 			}
// 			console.clear();
// 			console.log(field);
// 	},

// 	getDirection() {
// 		const availableDirections = [-1, 1, 2, 3, 4, 6, 7, 8, 9];
// 		while (true) {
// 			const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, для выхода введите -1'))
// 			if (!availableDirections.includes(direction)) {
// 				alert('Для перемещения надо ввести одно из значений: -1, 1, 2, 3, 4, 6, 7, 8, 9');
// 				continue;
// 			}
// 			return direction;
// 		}
// 	},

// 	canPlayerMakeStep(nextPoint) {
// 		if (nextPoint.x < 0 || nextPoint.x > 9 || nextPoint.y < 0 || nextPoint.y > 9) {
// 			return false;
// 		} else return true;
// 	}
// };

// walkyQuest.run();

//3 
// const questions = [
// 	{
// 		text: 'В каком году Ю. Гагарин совершил полет в космос?',
// 		variants: {
// 			a: '1961',
// 			b: '1992',
// 			c: '1881',
// 			d: '1963',
// 		},
// 		correctAnswerKey: 'd'
// 	},
// 	{
// 		text: 'Кто автор \"Сказки о попе и работнике его Балде\"?',
// 		variants: {
// 			a: 'Пушкин',
// 			b: 'Лермонтов',
// 			c: 'Крылов',
// 			d: 'Достоевский',
// 		},
// 	correctAnswerKey: 'a',
// 	},
// 	{
// 		text: 'Исполнитель роли Бендера в \"Золотом теленке\"?',
// 		variants: {
// 			a: 'Миронов',
// 			b: 'Папанов',
// 			c: 'Гомиашвили',
// 			d: 'Юрский',
// 		},
// 	correctAnswerKey: 'd',
// 	},
// 	{
// 		text: 'В каком году Россия объявила дефолт?',
// 		variants: {
// 			a: '1991',
// 			b: '1986',
// 			c: '1998',
// 			d: '2008',
// 		},
// 	correctAnswerKey: 'c',
// 	},
// 	{
// 		text: 'Какие два евангелиста повествуют об обстоятельствах рождения Иисуса Христа?',
// 		variants: {
// 			a: 'Марк и Иоанн',
// 			b: 'Иоанн и Линда',
// 			c: 'Марк и Лука',
// 			d: 'Матфей и Лука',
// 		},
// 	correctAnswerKey: 'd',
// 	},
// 	{
// 		text: 'Что говорит человек, когда замечает нечто необычное?',
// 		variants: {
// 			a: 'Попало в лоб',
// 			b: 'Бросилось в глаза',
// 			c: 'Накапало в уши',
// 			d: 'Залетело в рот',
// 		},
// 	correctAnswerKey: 'b',
// 	},
// 	{
// 		text: 'Кто стал героиней песни Максима Леонидова?',
// 		variants: {
// 			a: 'Девочка — мираж',
// 			b: 'Девочка — видение',
// 			c: 'Девочка — приведенье',
// 			d: 'Девочка — галлюцинация',
// 		},
// 	correctAnswerKey: 'b',
// 	},
// ];
// const quiz = {
// 	questions,
// 	scoreCount: 0,


// 	run() {
// 		const userAnswer = this.getAnswer();

// 		if (userAnswer === '+') {
// 			alert('Добро пожаловать уважаемый участник викторины.');
// 			alert('It Has Begun');
// 		} else if (userAnswer === '-') {
// 			alert('До свидания.')
// 			return;
// 		};

// 		this.getCurrentQuestion();

// 		alert(`Вы правильно ответили на ${this.scoreCount} из 7 вопросов`);

// 		const playAgain = prompt('Хотите сыграть снова? Введите \"+\" - если да, \"-\" - если нет.')

// 		if (playAgain === '+') {
// 			this.scoreCount = 0;
// 			this.run();
// 		}
// 	},

// 	getAnswer() {
// 		const answer = prompt('Здравствуйте. Хотите сыграть в викторину?. Введите \"+\" - если да, \"-\" - если нет.');
// 		return answer;
// 	},

// 	getValidAnswer() {
// 		let availableAnswers = ['a', 'b', 'c', 'd', '-'];
// 		while (true) {
// 			let answer = prompt('Введите вариант ответа.');
// 			if (!availableAnswers.includes(answer)) {
// 				alert('Необходимо ввести один из вариантов ответа.');
// 				continue;
// 			}
// 			return answer;
// 		}
// 	},	

// 	getCurrentQuestion() {
// 		this.questions.forEach((obj) => {
// 			console.clear();
// 			console.log(obj.text);
// 			for (let key in obj.variants) {
// 				console.log(`${key} - ${obj.variants[key]}`);
// 			}
// 			let answer = this.getValidAnswer();
// 			if (answer === obj.correctAnswerKey) {
// 				this.scoreCount++;
// 			}
// 		})
// 	},

// 	userWantExit(userAnswer) {
// 		if (userAnswer === '-') {
// 			alert('Очень жаль, до свидания.');
// 			return;
// 		}
// 	},
// }
// quiz.run();

//ДЗ 5

// const chess = {
// 	gameContainerElem: document.getElementById('game'),
// 	rowsCount: 10,
// 	colsCount: 10,
// 	figures: [
// 		{name: 'p', color: 'w', position: 'A2'},
// 		{name: 'p', color: 'w', position: 'B2'},
// 		{name: 'p', color: 'w', position: 'C2'},
// 		{name: 'p', color: 'w', position: 'D2'},
// 		{name: 'p', color: 'w', position: 'E2'},
// 		{name: 'p', color: 'w', position: 'F2'},
// 		{name: 'p', color: 'w', position: 'G2'},
// 		{name: 'p', color: 'w', position: 'H2'},
// 		{name: 'b', color: 'w', position: 'C1'},
// 		{name: 'b', color: 'w', position: 'F1'},
// 		{name: 'N', color: 'w', position: 'B1'},
// 		{name: 'N', color: 'w', position: 'G1'},
// 		{name: 'R', color: 'w', position: 'A1'},
// 		{name: 'R', color: 'w', position: 'H1'},
// 		{name: 'Q', color: 'w', position: 'E1'},
// 		{name: 'K', color: 'w', position: 'D1'},
// 		{name: 'p', color: 'b', position: 'A7'},
// 		{name: 'p', color: 'b', position: 'B7'},
// 		{name: 'p', color: 'b', position: 'C7'},
// 		{name: 'p', color: 'b', position: 'D7'},
// 		{name: 'p', color: 'b', position: 'E7'},
// 		{name: 'p', color: 'b', position: 'F7'},
// 		{name: 'p', color: 'b', position: 'H7'},
// 		{name: 'p', color: 'b', position: 'G7'},
// 		{name: 'b', color: 'b', position: 'C8'},
// 		{name: 'b', color: 'b', position: 'F8'},
// 		{name: 'N', color: 'b', position: 'B8'},
// 		{name: 'N', color: 'b', position: 'G8'},
// 		{name: 'R', color: 'b', position: 'A8'},
// 		{name: 'R', color: 'b', position: 'H8'},
// 		{name: 'Q', color: 'b', position: 'E8'},
// 		{name: 'K', color: 'b', position: 'D8'},
// 	],
// 	figureHTML: {
// 		pw: '♙',
// 		bw: '♖',
// 		Nw: '♘',
// 		Rw: '♗',
// 		Qw: '♕',
// 		Kw: '♔',
// 		pb: '♟',
// 		bb: '♜',
// 		Nb: '♞',
// 		Rb: '♝',
// 		Qb: '♛',
// 		Kb: '♚',
// 	},

// 	renderBoard() {
// 		const num = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// 		const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
// 		for (let row = 0; row < this.rowsCount; row++) {
// 			const trElem = document.createElement('tr');
// 			this.gameContainerElem.appendChild(trElem);
// 			for (let col = 0; col < this.colsCount; col++) {
// 				const cell = document.createElement('td');
// 				trElem.appendChild(cell);
// 				cell.setAttribute('data-pos', `${letters[col]}${num[row]}`)
// 				if (trElem.rowIndex === 0 || trElem.rowIndex === 9) {
// 					cell.innerHTML = letters[col];
// 				} else if (cell.cellIndex === 0 || cell.cellIndex === 9) {
// 					cell.innerHTML = num[row];
// 				} else if (this.isCellsBlack(trElem.rowIndex, cell.cellIndex)) {
// 					cell.style.backgroundColor = '#623a07';
// 				}
// 			}
// 		}
// 		return this.gameContainerElem
// 	},

// 	isCellsBlack(rowNum, colNum) {
// 		if (rowNum % 2 === 0) {
// 			return colNum % 2 === 1;
// 		} else return colNum % 2 === 0;
// 	},

// 	renderFigure() {
// 		this.figures.forEach((figure) => {
// 			document.querySelector(`[data-pos = ${figure.position}]`).innerHTML = this.figureHTML[figure.name + figure.color];
// 		})
// 	}
// };
// chess.renderBoard();
// chess.renderFigure();

//ДЗ 6

/**
 * @property {Object} settings Объект с настройками галереи.
 * @property {string} settings.previewSelector Селектор обертки для миниатюр галереи.
 * @property {string} settings.openedImageWrapperClass Класс для обертки открытой картинки.
 * @property {string} settings.openedImageClass Класс открытой картинки.
 * @property {string} settings.openedImageScreenClass Класс для ширмы открытой картинки.
 * @property {string} settings.openedImageCloseBtnClass Класс для картинки кнопки закрыть.
 * @property {string} settings.openedImageCloseBtnSrc Путь до картинки кнопки открыть.
 */
 const gallery = {
	openImageEl: {},

	settings: {
	  previewSelector: '.mySuperGallery',
	  openedImageWrapperClass: 'galleryWrapper',
	  openedImageClass: 'galleryWrapper__image',
	  openedImageScreenClass: 'galleryWrapper__screen',
	  openedImageCloseBtnClass: 'galleryWrapper__close',
	  openedImageCloseBtnSrc: 'images/gallery/close.png',
	  openedImageError: 'images/error/Error.png',
	  openedImageNext: {src: 'images/gallery/next.png', class: 'galleryWrapper__next'},
	  openedImageBack: {src: 'images/gallery/back.png', class: 'galleryWrapper__back'},
	},
	/**
	 * Инициализирует галерею, ставит обработчик события.
	 * @param {Object} userSettings Объект настроек для галереи.
	 */
	init(userSettings = {}) {
	  // Записываем настройки, которые передал пользователь в наши настройки.
	  Object.assign(this.settings, userSettings);
 
	  // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
	  // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
	  // gallery и передадим туда событие MouseEvent, которое случилось.
	  document
		.querySelector(this.settings.previewSelector)
		.addEventListener('click', event => this.containerClickHandler(event));
	},
	/**
	 * Обработчик события клика для открытия картинки.
	 * @param {MouseEvent} event Событие клики мышью.
	 * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
	 */
	containerClickHandler(event) {
	  // Если целевой тег не был картинкой, то ничего не делаем, просто завершаем функцию.
	  if (event.target.tagName !== 'IMG') {
		 return;
	  }
	  // Открываем картинку с полученным из целевого тега (data-full_image_url аттрибут).
	  this.openImage(event.target.dataset.full_image_url);
	  this.openImageEl = event.target;
	},
 
	/**
	 * Открывает картинку.
	 * @param {string} src Ссылка на картинку, которую надо открыть.
	 */
	openImage(src) {
	  // Получаем контейнер для открытой картинки, в нем находим тег img и ставим ему нужный src.
	  this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
	},
 
	/**
	 * Возвращает контейнер для открытой картинки, либо создает такой контейнер, если его еще нет.
	 * @returns {Element}
	 */
	getScreenContainer() {
	  // Получаем контейнер для открытой картинки.
	  const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
	  // Если контейнер для открытой картинки существует - возвращаем его.
	  if (galleryWrapperElement) {
		 return galleryWrapperElement;
	  }
 
	  // Возвращаем полученный из метода createScreenContainer контейнер.
	  return this.createScreenContainer();
	},
 
	/**
	 * Создает контейнер для открытой картинки.
	 * @returns {HTMLElement}
	 */
	createScreenContainer() {
	  // Создаем сам контейнер-обертку и ставим ему класс.
	  const galleryWrapperElement = document.createElement('div');
	  galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);
 
	  // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
	  const galleryScreenElement = document.createElement('div');
	  galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
	  galleryWrapperElement.appendChild(galleryScreenElement);
 
	  // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
	  const closeImageElement = new Image();
	  closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
	  closeImageElement.src = this.settings.openedImageCloseBtnSrc;
	  closeImageElement.addEventListener('click', () => this.close());
	  galleryWrapperElement.appendChild(closeImageElement);
 
	  // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
	  const image = new Image();
	  image.classList.add(this.settings.openedImageClass);
	  image.onerror = () => image.src = this.settings.openedImageError;
	  galleryWrapperElement.appendChild(image);

	  const nextImage = new Image();
	  nextImage.classList.add(this.settings.openedImageNext.class);
	  nextImage.src = this.settings.openedImageNext.src;
	  nextImage.addEventListener('click', () => {
		this.openImageEl = this.getNextImage();
		this.openImage(this.openImageEl.dataset.full_image_url)});
	  galleryWrapperElement.appendChild(nextImage);

	  const prevImage = new Image();
	  prevImage.classList.add(this.settings.openedImageBack.class);
	  prevImage.src = this.settings.openedImageBack.src;
	  prevImage.addEventListener('click', () => {
		this.openImageEl = this.getBackImage();
		this.openImage(this.openImageEl.dataset.full_image_url)});
	  galleryWrapperElement.appendChild(prevImage)
 
	  // Добавляем контейнер-обертку в тег body.
	  document.body.appendChild(galleryWrapperElement);
 
	  // Возвращаем добавленный в body элемент, наш контейнер-обертку.
	  return galleryWrapperElement;
	},
 
	/**
	 * Закрывает (удаляет) контейнер для открытой картинки.
	 */
	close() {
	  document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
	},

	getNextImage() {
		const nextImg = this.openImageEl.nextElementSibling;
		return nextImg ? nextImg : this.openImageEl.parentNode.firstElementChild;
	},

	getBackImage() {
		const prevImg = this.openImageEl.previousElementSibling;
		return prevImg ? prevImg : this.openImageEl.parentNode.lastElementChild;
	},
 };
 
 // Инициализируем нашу галерею при загрузке страницы.
 window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});