

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// const { resolveComponent } = require("vue");


// alert(a + b);

// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2


// 5 > 4

// "ананас" > "яблоко"

// "2" > "12"
// undefined == null
// undefined === null
// null == "\n0\n"
// null === +"\n0\n"





// let yaer = prompt('В каком году был выпущен JS');

// if (yaer < 2015) {
//     alert('Слишком рано')
// }

// else if (yaer > 2015) {
//     alert('Уже поздно!')
// }

// else {
//     alert('Верно!')
// }


// let accessAllowed;
// let age = prompt('Сколько Вам лет?', '');

// if (age >= 18) {
//     accessAllowed = true;
// }

// else {
//     accessAllowed = false;
// }

// alert(accessAllowed);




//тернарный оператор - вопросительный знак
// let accessAllowed = age > 18 ? true : false;


// let age = prompt('Сколько Вам лет?')

// let message = (age < 3) ? 'Привет, малыш' :
//     (age < 18) ? 'Привет, подросток' :
//     (age < 100) ? 'Здравствуйте!' :
//     'Долгих лет жизни!!!';

// alert (message);





// let name = prompt('Какое «официальное» название JavaScript?', '');

// if (name === 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert ('Неверно!')
// }


// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.


// let number = prompt('Введите число', '');

// if (number > 0) {
//     alert(1);
// } else if (number < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }




// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result = (a + b < 4) ? 'Мало' : 'Много!';
// alert(result);


// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }



// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравстуйте' :
//     (login == '') ? 'Нет логина' :
//     '';

// alert(message);


// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.


// if (age >= 14 && age <=90) {
// }


// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

//1 вариант
// if (!(age >= 14 && age <=90)) {
// }

//2 вариант
// if (age < 14 || age > 90) {
// }


// let login = prompt('Кто там?', '');

// if (login == 'Админ') {
//     let password = prompt('Введите пароль', );
//     if (password == 'Я главный') {
//         alert('Здравствуйте!');
//     }
//     else if (password === '' || password === null) {
//         alert('Отменено');
//     }
//     else {
//         alert('Неверный пароль!');
//     }
// }
// else if (login === '' || login === null) {
//     alert('Отменено');
// }
// else {
//     alert('Я вас не знаю!');
// }





// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }


// let i = 0;

// for (; i < 3; i++) {
//     alert(i);
// }

// alert(i);

// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//       let input = prompt(`Значение на координатах (${i},${j})`, '');
//     }
//   }

//   alert('Готово!');


// let i = 3;

// while (i) {
//   alert( i-- );
// }


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let browser = prompt('Enter browser');

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome'
//   || browser === 'Firefox'
//   || browser === 'Safari'
//   || browser === 'Opera') {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }



// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }


// const number = +prompt('Введите число между 0 и 3', '');

// switch(number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }


// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// alert(result);


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }


// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function min(a, b) {
//   return a < b ? a : b;
// }


// let x = prompt("x?", '');

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let n = prompt("n?", '');

// if (n >= 1 && n % 1 == 0) {
//   alert( pow(x, n) );
// } else {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// let user = {
//     name : John,
//     surname : Smith,
// };

// user.name = 'Pete';
// delete user.name;


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for (key in salaries) {
//     let sum = salaries[key];
// }

// alert(sum);


// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };


// function multiplyNumeric(menu) {
//     for (key in menu) {
//         if (typeof menu[key] == 'number') {
//             menu[key] *= 2;
//         }
//     }
// }



// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };


// let calculator = {
//     read () {
//         this.a = +prompt('a?', '');
//         this.b = +prompt('b?', '');
//     },

//     sum () {
//         return this.a + this.b;
//     },

//     mul () {
//         return this.a * this.b;
//     }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.


// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('Введите первое число', '');
//         this.b = +prompt('Введите второе число', '');
//     },

//     this.sum = function() {
//         return this.a + this.b;
//     },

//     this.mul = function() {
//         return this.a * this.b;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( 'Sum: ' + calculator.sum() );
// alert( 'Mul: ' + calculator.mul() );




// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.



// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('Введите любое число:', '');
//     }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();
// alert(accumulator.value);













//Тип данных Symbol() 06/09/23

// let id = Symbol('qwerty');

//чтобы вывести символ нужно писать так

// alert( id.toString() ); // Symbol(qwerty)

//Чтобы вывести только описание, то так

// alert(id.description); // qwerty



// "Скрытые" свойства
// let user = {
//     name: "Вася"
// };

// let id = Symbol("id");

// user.id = 123;
// user.id = 321;

// alert( user.id );


//Символы в литеральном объекте всегда надо писать в []

// let munu = {
//     burger: 'vip',
//     [id]: '123'
// };


//Символы игнорируются циклом for…in

// let go = Symbol('go');

// let currentUser = {
//     name: 'Roma',
//     age: 21,
//     [go]: 126875
// };

// name, age
// for (key in currentUser) {
//     alert([key]);
// }

//alert('Напрямую: ' + currentUser[go]); // Напрямую: 126875


//А вот Object.assign, в отличие от цикла for..in, копирует и строковые, и символьные свойства:

// let id = Symbol('id');

// let user = {
//     [id]: 123
// };

// let clone = Object.assign({}, user);

// alert(clone[id]);

//Глобальные символы равны
//Если нам надо создать всё-такие 2 одинаковых символа, то используют глобальный реестр
//Если вам нужен символ, доступный везде в коде – используйте глобальные символы.
//let idFirst = Symbol.for('id');

//let idSecond = Symbol.for('id');

//alert(idFirst == idSecond); //true





//Symbol.keyFor - используется для получения имени символов (то есть выводит его название для глобальных символов)

// получаем символ по имени
//let sym = Symbol.for("name"); // .for для глобальных символов
// let sym2 = Symbol.for("id");

// получаем имя по символу
// alert( Symbol.keyFor(sym) ); // name
// alert( Symbol.keyFor(sym2) ); // id


//Symbol.keyFor не работает для долкальных символов, но можно использовать discription

// let globalSymbol = Symbol.keyFor('name');
// let localSymbol = Symbol('id');

//alert( Symbol.keyFor(globalSymbol) ); //name
//alert( Symbol.keyFor(localSymbol) ); //undefind

//поэтому тут нужно использовать discription
//alert(localSymbol.description); //id









// 08/09 ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ В ПРИМИТИВЫ

//Использование Symbol.toPrimitive


// let user = {
//     name: 'Roma',
//     money: 1000,

//     [Symbol.toPrimitive](hint) {
//         alert(`Hint: ${hint}`);
//         return hint == 'string' ? `{name: ${this.name}}` : this.money;
//     }
// };

// alert(user);
// alert(+user);
// alert(user + 500);




//Использование toString и valueOf

// let user = {
//     name: "John",
//     money: 1000,

//     для хинта равного "string"
//     toString() {
//         return `{name: "${this.name}"}`;
//     },

//      для хинта равного "number" или "default"
// valueOf() {
//     return this.money;
// }

// };

// alert(user); // toString -> {name: "John"}
// alert(+user); // valueOf -> 1000
// alert(user + 500); // valueOf -> 1500










// ЧИСЛА 11.09

//toString(base)

//let num = 255;

//alert( num.toString(16) );  // ff
//alert( num.toString(2) );   // 11111111



//toFixed()

//isNan(), isFinite()

//Number.isNan(), Number.isFinite()

//parseInt, parseFloat

//Math.random()
//Math.max(a, b, c, ...), Math.min(a, b, c, ...)
//Math.pow(n, power)





// СТРОКИ 12.09


//let str = `Hello`;

// получаем первый символ
//alert( str[0] ); // H

//alert( str.at(1) ); // e

// получаем последний символ
//alert( str[str.length - 1] ); // o

//alert( str.at(-5) ); // H

//Также можно использовать метод str.at(pos). Первый символ занимает нулевую позицию:

//Как вы можете видеть, преимущество метода .at(pos) заключается в том, что он допускает отрицательную позицию.
// Если pos – отрицательное число, то отсчет ведется от конца строки.

//Таким образом, .at(-1) означает последний символ, а .at(-2) – тот, что перед ним, и т.д.





// МАССИВЫ 15.09


// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл





// var styles = ['Джаз', 'Блюз'];
// alert(styles);
// styles.push('Рок-н-ролл');
// alert(styles);
// styles[1] = 'Классика';
// alert(styles);
// styles.shift();
// alert(styles);

// styles.unshift('Рэп', 'Регги');
// alert(styles);





// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».



// function sumInput() {

//     var numbers = [];

//     while (true) {
//         var value = prompt('Введите число', '');

//         if (value === '' || value === null || !isFinite(value)) break;

//         numbers.push(+value);
//     }

//     var sum = 0;

//     for (number of numbers) {
//         sum += number;
//     }

//     return sum;
// }

// alert( sumInput() );







// МЕТОДЫ МАССИВОВ 16.09 - 17.09


// Шпаргалка по методам массива:

// Для добавления/удаления элементов:

// push(...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с индекса start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
// Для поиска среди элементов:

// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// Дополнительно:

// Array.isArray(arr) проверяет, является ли arr массивом.
// Пожалуйста, обратите внимание, что методы push, pop, shift, unshift, sort, reverse и splice изменяют исходный массив.


// ЗАДАЧИ

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

// Примеры:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


// function camelize(str) {

// }








// MAP и SET 19.09


// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства:

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.




// Перебор Map
// Для перебора коллекции Map есть 3 метода:

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

// let recipeMap = new Map([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук", 50]
// ]);

// перебор по ключам (овощи)
//for (let vegetable of recipeMap.keys()) {
//    alert(vegetable); // огурец, помидор, лук
//}

// перебор по значениям (числа)
//for (let amount of recipeMap.values()) {
//    alert(amount); // 500, 350, 50
//}

// перебор по элементам в формате [ключ, значение]
//for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//    alert(entry); // огурец,500 (и так далее)
//}




//Object.entries: Map из Object


// let obj = {
//     name: "John",
//     age: 30
// };

// let map = new Map(Object.entries(obj));

// alert(map.get('name')); // John



//Object.fromEntries: Object из Map

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ]);

// prices = { banana: 1, orange: 2, meat: 4 }

// alert(prices.orange); // 2






//Set
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.



// Set
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// Его основные методы это:

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.



// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// set хранит только 3 уникальных значения
// alert(set.size); // 3

// for (let user of set) {
//   alert(user.name); // John (потом Pete и Mary)
// }




// Перебор объекта Set
// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach:

// let set1 = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set1) alert(value);

// то же самое с forEach:
// set.forEach((value, valueAgain, set1) => {
//   alert(value);
// });




// ex

// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.

// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.

// P.P.S. Используйте Set для хранения уникальных значений.

// var values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];


// const unique = () => {
//    values = values.filter((el, id) => {
//       return values.indexOf(el) === id;
//     });
//     console.log(values);
// }

// unique();

// возвращает именно МАССИВ
// var mass = [1,2,3,4,5,6,7,8];
// console.log(mass);
// mass = mass.map((item,index)=>{
//    return item*2;
// });
// console.log(mass);

// var mass = ['егор','рома','никита','эдик'];
// mass = mass.filter((item, idx)=>{
//     return item != 'егор';
// });
// console.log(mass);


// function name(params) {
//     console.log(this);
// }


// const name1 = () => {
//     console.log(this);
// }

// name();
// name1();

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// alert(unique(values));


// mass = [
//     {
//         name: 'Roma',
//         age: 21
//     },

//     {
//         name: 'Nikita',
//         age: 22
//     },

//     {
//         name: 'Ed',
//         age: 26
//     },

//     {
//         name: 'Igor',
//         age: 52,
//     }
// ];

// mass = mass.filter((item, id) => {
//     return item.name !== 'Ed';
// });

// mass = mass.map((item, id) => {

//     return {
//         ...item, age: item.age * 2, male: item.man = 'man'
//     }
// });



// var nik = {
//     male: "man"
// }

// var roma = [1, 2, 3, 4, 5, 6, 7];
// console.log(roma);
// console.log(...roma);


// var nikita = ["nikita","roma","igor"];
// console.log(nikita);
// console.log(...nikita);

// var newMass = [...roma, ...nikita];
// console.log(newMass);



// console.log(mass);



// var user = {
//     name: 'Roma',
//     age: 21
// }

// for (let value of Object.entries(user)) {
//     console.log(value);
// }












// ТРАНСФОРМАЦИЯ ОБЪЕКТОВ 21.09



//Трансформация ОБЪЕКТА В МАССИВ И ОБРАТНО

//Сначала с помощью Object.entries() мы получаем из обЪекта массив [[keys: value], [...], [...]]
// а затем с помощью .map() Эта функция берет каждую пару ключ-значение [key, val] из вложенных массивов и возвращает новый массив
// уже после мы обратно массив переделываем в объект


// var prices = {
//     banana: 23,
//     apple: 15,
//     cucamber: 5
// }

// var mulPrices = Object.fromEntries(
//     Object.entries(prices).map(([keys, value]) => ([keys, value * 2]))
// );

// console.log(mulPrices);



// var salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };


// var sumSalaries = (salaries) => {
//     var sum = 0;
//     for (let value of Object.values(salaries)) {
//         sum += value;
//     }

//     return sum;

// };

// console.log(sumSalaries(salaries));



// var user = {
//     name: 'John',
//     age: 30
// };

// var count = (obj) => {
//     return Object.keys(obj).length;
// };

// console.log(count(user));








//ДЕСТРУКТУРИЗАЦИЯ МАССИВА 23/09

// var array = ['Roman', 'Sukharev'];

// руктурирующее присваивание
// записывает name = arr[0]
// и lastName = arr[1]

// var [name, lastName] = array; // Сама деструктуризация

// console.log(name);
// console.log(lastName);



// var [firstName, surname] = "Ilya Kantor".split('');

// console.log(firstName);


/*
* «Деструктуризация» не означает «разрушение».
«Деструктурирующее присваивание» не уничтожает массив.
 Оно вообще ничего не делает с правой частью присваивания, его задача – только скопировать нужные значения в переменные.

Это просто короткий вариант записи:
*/


// var user = {
//     name: 'Roman',
//     age: 21
// };

// for (var [key, value] of Object.entries(user)) {
//     alert(`${key}:${value}`);
// }



// var userSecond = new Map ();

// userSecond.set('name', 'Roman');
// userSecond.set('age', '78');

// for (var [key, value] of user) {
//     alert(`${key}:${value}`);
// }



//ВЛОЖЕННАЯ ДЕСТРУКТЦРИЗАЦИЯ

// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };

// деструктуризация разбита на несколько строк для ясности
//let {
//  size: { // положим size сюда
//     width,
//       height
//    },
// items: [item1, item2], // добавим элементы к items
//title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
//} = options;

//alert(title);  // Menu
//alert(width);  // 100
//alert(height); // 200
//alert(item1);  // Cake
//alert(item2);  // Donut













//ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИИ

// let options1 = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
// };

// ...и она немедленно извлекает свойства в переменные
// function showMenu({ title, width = 200, height = 100, items = [] }) {

//     alert(`${title} ${width} ${height}`);
//     alert(items);
// }

// showMenu(options);



// EX 1

// let user = {
//     name: "John",
//     years: 30
// };

/**
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/


// let { name, years: age, isAdmin = false } = user;


// alert(name);
// alert(age);
// alert(isAdmin);



//EX 2

/*
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/



// var salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     return Object.entries(salaries).sort(([key, value], [key2, value2]) => value - value2).at(-1);
// }

// console.log(topSalary(salaries));




// var obj = [
//   {
//     name: 'Roma',
//     money: 200
//   },

//   {
//     name: 'Igor',
//     money: 300
//   },

//   {
//     name: 'Nikita',
//     money: 400
//   },

//   {
//     name: 'Ilya',
//     money: 500
//   }
// ];

// obj = obj.map((item, id) => {

//   return {
//     ...item, money: item.money * 2
//   }
// });

// console.log(obj);

// mass = mass.map((item, id) => {

//     return {
//         ...item, age: item.age * 2, male: item.man = 'man'
//     }
// });
















// ДАТА И ВРЕМЯ 24/09


// var now = new Date ();

// alert(now);


// new Date(year, month, date, hours, minutes, seconds, ms)
// Создать объект Date с заданными компонентами в местном часовом поясе. Обязательны только первые два аргумента.

// year должен состоять из четырёх цифр. Для совместимости также принимаются 2 цифры и рассматриваются как 19xx, к примеру, 98 здесь это тоже самое, что и 1998, но настоятельно рекомендуется всегда использовать 4 цифры.
// month начинается с 0 (январь) по 11 (декабрь).
// Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
// Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.



// Существуют методы получения года, месяца и т.д. из объекта Date:

// getTime()
// Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

// getFullYear()
// Получить год (4 цифры)

// getMonth()
// Получить месяц, от 0 до 11.

// getDate()
// Получить день месяца, от 1 до 31, что несколько противоречит названию метода.

// getDay()
// Вернуть день недели от 0 (воскресенье) до 6 (суббота).
// Несмотря на то, что в ряде стран за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.


// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// Получить, соответственно, часы, минуты, секунды или миллисекунды.





// Установка компонентов даты
// Следующие методы позволяют установить компоненты даты и времени:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC)


// var date = new Date();

// date.setFullYear(date.getFullYear());

// alert(date);







//let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

//let end = new Date(); // заканчиваем отсчёт времени

//alert(`Цикл отработал за ${end - start} миллисекунд`);

// Date.now()

// Если нужно просто измерить время, объект Date нам не нужен.

// Существует особый метод Date.now(), возвращающий текущую метку времени.

// Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date.
//Так что этот способ работает быстрее и не нагружает сборщик мусора.

// Данный метод используется из соображений удобства или когда важно быстродействие, например,
//при разработке игр на JavaScript или других специализированных приложений.

// Вероятно, предыдущий пример лучше переписать так:

//let start1 = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

//let end1 = Date.now(); // заканчиваем отсчёт времени

//alert(`Цикл отработал за ${end1 - start1} миллисекунд`); // вычитаются числа, а не даты













// ФОРМАТ , МЕТОД to 26/09


// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// var firstObj = JSON.stringify(user);

// var secondObj = '{"name":"Василий Иванович","age":35}';

// secondObj = JSON.parse(secondObj);

// console.log(firstObj);
// console.log(secondObj);



// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room
// };

// цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(.stringify(meetup, function replacer(key, value) {
//   return (key && value == meetup) ? undefined : value;
// }));






// УЖЕ ВЕЧЕР 26/09

//РЕКУРСИЯ И СТЕК


// Рекурсия - это вызов самой функции внутри этой же функции.

//First variant without recursion

//const pow = (x, n) => {

// var result = 1;

// for (var i = 0; i < n; i++) {
//   result *= x;
// }

// return result;

//Second variant with recursion

// if (n === 1) {
//   return x;
// } else {
//   return x * pow(x, n - 1);
// }

//Third short variant with recursion

//  return (n === 1) ? x : (x * pow(x, n - 1));
//}

//console.log(pow(2, 4));


//КОНТЕКСТ ВЫПОЛНЕНИЯ И СТЕК

//Контекст выполнения рекурсии, это количество контекстов (итераций) внутри этой функции. Так же называют глубина рекурсии.


// EX from Learn JS


//First

// const sumTo = (n) => {

//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumTo(100));


// //Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

// const sumTo1 = (n) => {
//   // if (n == 1) return 1;
//   // return n + sumTo(n - 1);

//   return (n == 1) ? 1 : n + sumTo1(n - 1);
// };
// console.log(sumTo1(100));

// //Через арифметическую прогрессию

// const sumTo2 = (n) => {
//   return n * (n + 1) / 2;
// }

// console.log(sumTo2(100));


// // ex 2


// // Считаем факториал с помошью рекурсии
// const factorial = (n) => {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// };

// // ex 3













//Остаточные параметры и оператор расширения 27/09
//Остаточные параметры. Оператор расширения. (Rest и Spread операторы).


// const func = (a, b) => {
//   console.log(a + b);
// }

// func(1, 3);


// const func1 = (...rest) => {
//   return rest.reduce((sum, item) => {
//     return sum + item;
//   }, 0);
// };

// console.log(func1(1, 3, 4, 6, 8)); // тут мы получаем массив, с которым мы можем продолжать работатть так, как мы хотим
// // 22

// // Тут мы отбрасываем первые 2 агрумента и работаем только с остальной частью
// const func2 = (a, b, ...rest) => {
//   return rest.reduce((sum, item) => {
//     return sum + item;
//   }, 0);
// };

// console.log(func2(1, 3, 4, 6, 8)); // 18


// //Мы можем передавать все значения (аргументы) массивов, то есть использовать spread оператор (оператор расширения)

// const mass = [1, 2, 3, 4, 5];
// const mass2 = [6, 7, 8];


// const func3 = (...rest) => {
//   return rest.reduce((sum, item) => {
//     return sum + item;
//   }, 0);
// };

// console.log(func3(...mass, 10, ...mass2));



// // У нас есть встроенный объект Math

// console.log(Math.max(...mass));













// //Область видимости переменных, замыкание 28/09


// // ЗАМЫКАНИЕ - это функция внутри функции, которая возвращает эту функцию

// //1
// function createCalcFunctionn(n) {
//   return function () {
//     console.log(1000 * n);
//   }
// }

// const calc = createCalcFunctionn(42);

// calc();

// //2
// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   }
// }

// const addOne = createIncrementor(1);
// console.log(addOne(10));



// //3
// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   }
// }

// const comUrl = urlGenerator('com');

// console.log(comUrl('Google'));


//4
// const urlGeneratorSecond = (domain) => {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }

// const ruUrl = urlGeneratorSecond('ru');

// console.log(ruUrl('thtranzit'));



// //5


// const person1 = {
//   name: 'Михаил',
//   age: 22,
//   job: 'Frontend'
// };

// const person2 = {
//   name: 'Елена',
//   age: 19,
//   job: 'SMM'
// };

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   }
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }


// bind(person1, logPerson)();
// bind(person2, logPerson)();












//Планирование: setTimeout и setInterval 02/10

/*
setTimeout позволяет вызвать функцию один раз через определённый интервал времени.
setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
*/




//SETTIMEOUT
// function sayHi(phrase, who) {
//   alert(phrase + ', ' + who);
// }

// setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон


// setTimeout(() => alert('Привет'), 1000);


//Отмена через clearTimeout

// let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
// alert(timerId); // идентификатор таймера

// clearTimeout(timerId);
// alert(timerId); // тот же идентификатор (не принимает значение null после отмены)







//setInterval

// Метод setInterval имеет такой же синтаксис как setTimeout:

/*
Метод setInterval имеет такой же синтаксис как setTimeout:

let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);
Все аргументы имеют такое же значение. Но отличие этого метода от setTimeout в том, что функция запускается не один раз,
а периодически через указанный интервал времени.

Чтобы остановить дальнейшее выполнение функции, необходимо вызвать clearInterval(timerId).
*/


// повторить с интервалом 2 секунды
// let timerId1 = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId1); alert('stop'); }, 5000);








//Вложенный setTimeout

// Есть два способа запускать что-то регулярно.










//Вкатце из видео

// есть синхронные и асинхронные операции
// синхронные - выполняются сразу при считывании кода
// асинхронные - выполняются с определенной задержкой

//setTimeout
// const printHello = () => {
//   console.log('Привет');
// }

// setTimeout(printHello, 5000);

//Если функция принимает какие-то параметры, то:

// const printHello1 = (text) => {
//   console.log(text);
// }
// 1 - ый вариант передачи параметра (он более корректный даже с точки зрения документации)
// setTimeout(printHello1, 5000, 'Как дела?')

// 2 - ый вариант передачи параметра

//


// Даже если мы поставим задержу 0 мс, то операция пройдет после всех синхронный операций. Пример:

// const printHello2 = (text) => {
//   console.log(text);
// }

// setTimeout(printHello2, 0, 'Этот текст снизу единиц');

// console.log('1111');




// Остановка текущего кода

// const printWork = (text) => {
//   console.log(text);
// }

// var timerId = setTimeout(printWork, 6000, 'Вот он текст');

// clearTimeout(timerId); // Ничего не выводит



//setInterval - если нам надо выполнять какое-то действие циклично


// const printWork1 = (text) => {
//   console.log(text);
// }

// var timerId = setInterval(printWork1, 1000, 'Вот он текст');

//но у него есть свои минусы

//Пишем setInterval с помощью setTimeout и рекурсии

// Это лучше использовать, а не обычный setInterval, так как если у нас код,
//который требует долгого выполнения, то тут сначала выполняется синхронная функция, а уже после запускается кастомный setInterval
// const customSetInterval = (func, interval, ...params) => {
//   setTimeout(() => {
//     func(...params);
//     customSetInterval(func, interval, ...params);
//   }, interval);
// }


// customSetInterval(printWork1, 1000, 'Жопа');

//Вложенный setTimeout

// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000);
// }, 2000);












//Декораторы и переадресация вызова, call/apply и ещё bind 04/10

//Методы нужны для того, чтобы вручную устанавливать значения, которые мы хотим видеть в this


// function printName(text, text2) {
//   console.log(text + text2 + this.firstName);
// }

// const user = {
//   firstName: 'Roma'
// }


// printName.call(user, 'Привет, ', 'дорогой ');



// // у метода call есть его брат-близнец apply, но отличие в том, что все аргументы мы передаем как массив []. Например:
// // в apply всегда только 2 агрумента


// function printName2(text, text2) {
//   console.log(text + text2 + this.lastName);
// }

// const user2 = {
//   lastName: 'Sukharev'
// }

// printName2.apply(user2, ['Салам, ', 'как ты ']);




// // Если нам нужно сделать всё тоже самое, что и раньше, но запустить данную функцию немного позже, то мы используем bind!
// // Делаем всё как в apply, но в конце присваиваем результат отработки данного метода в переменную. С помощью этого
// // мы можем вызвать эту переменую в любом участуке кода.

// //Пример:


// function printMessage(text, text2) {
//   console.log(text + text2 + this.message);
// }


// const obj = {
//   message: 'Hello мир,'
// }

// var foo = printMessage.bind(obj, 'Манера ', 'крутит мир ');


// foo();

// // ещё удобство данного метода заключается в том, что 2 параметр функции мы можем передать уже в вызове функции foo

// function printMessage(text, text2) {
//   console.log(text + text2 + this.message);
// }


// const obj2 = {
//   message: 'Hello мир,'
// }

// var foo = printMessage.bind(obj2, 'Манера ');


// foo('крутит мир ');
// foo('ляляля ');
// foo('трятрятря ');





// // Также очень часто применяют метод bind без привязки this

// function mul(a, b) {
//   console.log(a * b);
// }




// var double = mul.bind(null, 2);


// double(3);
// double(4);
// double(5);





// // ДЕКОРАТОРЫ

// // Декоратор - это специальная функция, которая приминает другую функцию в качестве аргумента и изменяет её поведение!
// // то есть она помогает кешировать результат и возвращать его
// // тут мы используем let, так как const не даст переприсвоить значение
// let printValue = (x) => {
//   // тут что-то сложное и ресурсоёмкое
//   return x * 2;
// }


// const cachingDecorator = (func) => {
//   // мы используем тут Map, так как тут могут быть и объекты
//   var cache = new Map();

//   return function (x) {
//     if (cache.has(x)) { // если у нас уже закеширован даннный результат
//       console.log('Я беру информацию из кеша');
//       return cache.get(x);
//     }

//     // если мы не попали в данное условие и в кеше нет такого результата
//     // тут мы создаем переменную result, куда мы будем присваивать результат отработки функции func и передавать наш x
//     var result = func(x);

//     // теперь нам обязательно нужно закешировать
//     cache.set(x, result);

//     console.log('Я беру информацию не из кеша');

//     return result;
//   }
// }

// // printValue = cachingDecorator(printValue);

// // console.log(printValue(9));
// // console.log(printValue(9));






// let mulValue = (x) => {
//   return x * 3;
// }

// const decorator = (func) => {
//   var cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       console.log('из кеша');
//       cache.get(x)
//     }

//     var result = func(x);


//     cache.set(x, result);
//     console.log('не из кеша');
//     return result;

//   }
// }

// mulValue = decorator(mulValue);

// console.log(mulValue(9));
// console.log(mulValue(9));











// //Привязка контекста к функции 07/10

// let user1 = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(user1.sayHi, 1000); // Привет, undefined!

// //Это произошло потому, что setTimeout получил функцию sayHi отдельно от объекта user (именно здесь функция и потеряла контекст).


// // Решение 1 (сделать функцию - обертку) --------------------------------------------------------------------------------------

// let user3 = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(function () {
//   user3.sayHi();
// }, 1000);

// // либо переписать короче

// setTimeout(() => { user3.sayHi() }, 1000);

// // но тут появляется загвостка, если в user будет записано другое значение? То есть в течение 1 секунды произойдет следующее:

// let user4 = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };

// setTimeout(() => user4.sayHi(), 1000);

// // ...в течение 1 секунды
// user4 = { sayHi() { alert("Другой пользователь в 'setTimeout'!"); } };

// // Другой пользователь в 'setTimeout'!
// // Решение 2: привязать контекст с помощью bind  ------------------------------------------------------------------------------

// var user5 = {
//   firstName: 'Nikita',
//   sayHi() {
//     alert(`Hello, ${this.firstName}`)
//   }
// };
// // привязка this к user5
// var greeting = user5.sayHi.bind(user5);

// greeting();

// setTimeout(greeting, 5000);











// //Повторяем стрелочные функции 07/10

// // у стрелочный функций нет this. Они ссылаются на родителя!

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(
//       student => alert(this.title + ': ' + student)
//     );
//   }
// };

// group.showList();


// /*
// Итого:
// Стрелочные функции:

// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.
// */























// // Флаги и дескрипторы свойств 08/10

// // У объектов есть свои свойства (пары ключ/значение) и у значений есть скрытые атрибуты (флаги)

// const flag = {
//   name: 'Igor',
//   age: 30
// }

// // метод Object.getOwnPropertyDescriptor нужен для того, чтобы отобразить флаги
// console.log(Object.getOwnPropertyDescriptor(flag, 'name'));

// /*
// writable - отвечает за то, можем ли мы изменить данное свойство или оно будет существовать только для чтения
// enumerable - можем ли мы, когда будем итерировать данное свойство в цикле for in (для того, чтобы дальше мы могли его отобразить)
// configurable - отвечает за то, можем ли мы удалить данное свойство и влиять как-то на другие флаги
// */

// // «дескриптор свойства»: он содержит значение свойства и все его флаги.


// // метод Object.defineProperty меняет флаги
// // в качестве параметров передаются: 1) объект; 2) ключ; 3) передаем объект настроек

// Object.defineProperty(flag, 'name', {
//   writable: false, // запрещаем изменять
//   enumerable: false, // запрещаем перечислять в циклах
//   configurable: false // запрещаем удалять
// })

// flag.name = 'Roma';

// // вывводит Igor, так как мы запретили изменять свойство
// console.log(flag);



// //выводит только 30, так как запретили перечислять в циклах
// for (let key in flag) {
//   console.log(flag[key]);
// }


// delete flag.name;

// console.log(flag);


// // похожий метод Object.defineProperties позволяет гибко работать со свойствами, то есть с кажым из них


// const flagSecond = {
//   name: 'Eduard',
//   age: 21
// }


// Object.defineProperties(flagSecond, {
//   name: {
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },

//   age: {
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
// })

// flagSecond.name = 'Roma';

// // выводит Eduard, так как мы запретили изменять свойство
// console.log(flagSecond);



// //ничего не выводит
// for (let key in flagSecond) {
//   console.log(flagSecond[key]);
// }

// // не можем удалить
// delete flagSecond.name;

// console.log(flagSecond);






// ещё одно свойство Object.preventExtensions помогает запретить добавление новых свойств в объект, но он не запрещает удалять свойства

// const basedUser = {
//   name: 'Alex',
//   age: 30,
// }
// туда мы передаем только наш объект
// Object.preventExtensions(basedUser);

// попытаемя добавтиь свойство
// basedUser.country = 'Russia';


// console.log(basedUser);

// метод Object.seal запрещает удалять и добавлять свойства

// Object.seal(basedUser);

// // но есть метод Object.freeze, который запрещает и редактировать его, так ещё удалять и добавлять свойства!

// Object.freeze(basedUser);


// // если надо проверить, можно ли добавлять свойства в объект, то можно использовать метод Object.isExtensible (выводит true или false)

// Object.isExtensible(basedUser);


// // если надо проверить, можно ли добавлять и удалять свойства в объект, то можно использовать метод Object.isSealed(); Тут true, если есть запрет

// Object.isSealed(basedUser);

// // если надо проверить, можно ли хоть что-то делать со свойствами объекта, то используем Object.isFrozen(); Тут true, если есть запрет

// Object.isFrozen(basedUser);




















// ГЕТТЕРЫ И СЕТТЕРЫ 09/10



/*
свойства-аксессоры (accessor properties). По своей сути это функции,
которые используются для присвоения и получения значения,
но во внешнем коде они выглядят как обычные свойства объекта.
*/

/*
Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи.
При литеральном объявлении объекта они обозначаются get и set:
*/


// геттеры предназначены только для чтения
// const userThird = {
//   name: 'Valeria ',
//   age: 25,
//   secondName: 'Sukhareva',
//   get fullName() {
//     return this.name + this.secondName;
//   },

// сеттеры принимают всегда только 1 пареметр

//   set fullName(value) {
//     [this.name, this.secondName] = value;
//   }
// };


// get и set работаеют вместе



// если попытаемся поменять местами, то ничего не получиться - поэтому нужен set

// userThird.fullName = 'Sukhareva Valeria';

// userThird.setName = 'Anna';



// userThird.fullName = ['Igor', 'Cripta'];

// console.log(userThird);

// console.log(userThird.fullName);

// console.log(userThird);
















// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ 10/10

// let animal = {
//   eats: true,
//   walk() {
//     alert('Go for a walk!');
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//   earLenght: 10,
//   __proto__: rabbit
// };

// console.log(rabbit.eats);
// rabbit.walk();
// console.log(longEar.eats);
// longEar.walk();


//Операция записи не использует прототип

/*
Прототип используется только для чтения свойств.

Операции записи/удаления работают напрямую с объектом.

В приведённом ниже примере мы присваиваем rabbit собственный метод walk:
*/

// let animalSecond = {
//   eats: true,
//   walk() {
//     /* этот метод не будет использоваться в rabbit */
//   }
// };

// let rabbitSecond = {
//   __proto__: animalSecond
// };

// rabbitSecond.walk = () => {
//   alert("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!







// let user45 = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user45,
//   isAdmin: true
// };

// alert(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// alert(admin.name); // Alice
// alert(admin.surname); // Cooper



// // Цикл for…in

// // Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.
// // Например:

// let animalThird = {
//   eats: true
// };

// let rabbitThird = {
//   jumps: true,
//   __proto__: animalThird
// };

// // Object.keys возвращает только собственные ключи
// alert(Object.keys(rabbitThird)); // jumps

// // for..in проходит и по своим, и по унаследованным ключам
// for (let prop in rabbitThird) alert(prop); // jumps, затем eats





// // Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key):
// // он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.


// // Пример такой фильтрации:

// let animal1 = {
//   eats: true
// };

// let rabbit1 = {
//   jumps: true,
//   __proto__: animal
// };

// for (let prop in rabbit1) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     alert(`Our: ${prop}`); // Our: jumps
//   } else {
//     alert(`Inherited: ${prop}`); // Inherited: eats
//   }
// }






// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
// };






// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert(lazy.stomach); // apple

















// //F.prototype 12/10


// var igor = {
//   make: true
// };

// function Cripta(name) {
//   this.name = name;
// }

// Cripta.prototype = igor;

// var bitcoin = new Cripta('Жопа с ручой');

// console.log(bitcoin.make);



// function Rabbit() {
//   /* прототип по умолчанию
//   Rabbit.prototype = { constructor: Rabbit };
//   */
// }



// function Rabbit(name) {
//   this.name = name;
// }

// let rabbit2 = new Rabbit("White Rabbit");
// //используем тот конструктор (встроенное свойство)
// let rabbit3 = new rabbit2.constructor("Black Rabbit");










// ПРОТОТИПЫ 14/10

// const user = {
//   name: 'Ivan',
//   age: 21,
//   level: 23,
//   coins: 456
// }

// const admin = {
//   isAdmin: true
// }

// admin.__proto__ = user;

// console.log(admin.age);




// const animal = {
//   eats: true
// };

// const rabbit = {
//   jump: true,
//   __proto__: animal
// };

// const dog = {
//   run: true,
//   __proto__: rabbit
// };

// for (let key in dog) {
//   console.log(dog[key], key);
// }

// //Используется для выведения собственных свойств объекта, а не прототипированных

// for (let key in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(key);

//   if (isOwn) {
//     console.log(dog[key], key);
//   }
// }



// Ещё раз повторяю то, что выучил


// const wolf = {
//   howl: true
// }

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = wolf;

// let dogSecond = new Dog('Pete');

// console.log(dogSecond);


























// Обработка ошибок, "try..catch" 15/10

/* 
Неважно, насколько мы хороши в программировании, иногда наши скрипты содержат ошибки.
Они могут возникать из-за наших промахов, неожиданного ввода пользователя, неправильного ответа сервера и по тысяче других причин.

Обычно скрипт в случае ошибки «падает» (сразу же останавливается), с выводом ошибки в консоль.

Но есть синтаксическая конструкция try..catch, которая позволяет «ловить» ошибки и вместо падения делать что-то более осмысленное.
*/


// без ошибок

// try {

//   alert('Начало блока try');  // (1) <--

//   // ...код без ошибок

//   alert('Конец блока try');   // (2) <--

// } catch (err) {

//   alert('Catch игнорируется, так как нет ошибок'); // (3)

// }




// // с ошибкой

// try {

//   alert('Начало блока try');  // (1) <--

//   lalala; // ошибка, переменная не определена!

//   alert('Конец блока try (никогда не выполнится)');  // (2)

// } catch (err) {

//   alert(`Возникла ошибка!`); // (3) <--

// }








// let json = '{ "age": 30 }'; // данные неполны

// try {

//   let user = JSON.parse(json); // <-- выполнится без ошибок
//   alert(user.name); // нет свойства name!

// } catch (e) {
//   alert("не выполнится");
// }

/*
Здесь JSON.parse выполнится без ошибок, но на самом деле отсутствие свойства name для нас ошибка.

Для того, чтобы унифицировать обработку ошибок, мы воспользуемся оператором throw.
Оператор throw генерирует ошибку.
*/


/*
В JavaScript есть множество встроенных конструкторов для стандартных ошибок:
 Error, SyntaxError, ReferenceError, TypeError и другие. Можно использовать и их для создания объектов ошибки.
*/


// let jsonSecond = '{ "age": 30 }'; // данные неполны

// try {

//   let user = JSON.parse(jsonSecond); // <-- выполнится без ошибок

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени"); // (*)
//   }

//   alert(user.name);

// } catch (e) {
//   alert("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
// }

//В строке (*) оператор throw генерирует ошибку SyntaxError с сообщением message.







/*
Есть простое правило:

Блок catch должен обрабатывать только те ошибки, которые ему известны, и «пробрасывать» все остальные.

Техника «проброс исключения» выглядит так:

Блок catch получает все ошибки.
В блоке catch(err) {...} мы анализируем объект ошибки err.
Если мы не знаем как её обработать, тогда делаем throw err.
*/


// function readData() {
//   let json = '{ "age": 30 }';

//   try {
//     // ...
//     blabla(); // ошибка!
//   } catch (e) {
//     // ...
//     if (e.name != 'SyntaxError') {
//       throw e; // проброс исключения (не знаю как это обработать)
//     }
//   }
// }

// try {
//   readData();
// } catch (e) {
//   alert("Внешний catch поймал: " + e); // поймал!
// }





// try…catch…finally


/*
Конструкция try..catch может содержать ещё одну секцию: finally.

Если секция есть, то она выполняется в любом случае:

после try, если не было ошибок,
после catch, если ошибки были.
*/


// try {
//   alert('try');
//   if (confirm('Сгенерировать ошибку?')) BAD_CODE();
// } catch (e) {
//   alert('catch');
// } finally {
//   alert('finally');
// }


/*
У кода есть два пути выполнения:

Если вы ответите на вопрос «Сгенерировать ошибку?» утвердительно, то try -> catch -> finally.
Если ответите отрицательно, то try -> finally.
Секцию finally часто используют, когда мы начали что-то делать и хотим завершить это вне зависимости от того, будет ошибка или нет.
*/



// let num = +prompt("Введите положительное целое число?", 35)

// let diff, result;

// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Должно быть целое неотрицательное число");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try {
//   result = fib(num);
// } catch (e) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// alert(result || "возникла ошибка");

// alert(`Выполнение заняло ${diff}ms`);





















// Промисы, async/await. Введение: колбэки 17/10

// в ведении меня познакомили с колбеками в функциях, когда нам нуждно загрузить скрипт после загрузки самого скрипта,
// а также с вложенными колбеками.

// упомянули адскую пирамиду вызовов из этих колбеков, которые заменяются промисами.




















// ПРОМИСЫ promise 18/10 (Синтаксис, методы then, catch, finnaly. Обработка ошибок.)

// промисы по своей сути представляют удобный способ организации асинхронного кода

//resolve - решать, reject - отклонять. Каждый из этих параметров представляет собой функцию.
// resolve отвечает за корректное выполнение промиса, а reject за выполнение промиса, но с ошибкой 

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Промис выполнился успешно!');
//   }, 1000);
// });


// promise.then((data) => console.log(data));



/*
  Алгоритм выполнения данного кода:
  1)Когда мы создаем новый экземпляр промиса, мы передаем функцию с параметрами и есть тело функции
  2)Данная функция выполняется сразу
  3)После того, как выполнится setTimeout мы вызываем функцию resolve 
  4)Дальше после выполнения resolve мы понимаем, что промис выполнился успешно 
  5)Затем с помощью цепочки промисов мы достаем результат отработки данного промиса (то, что мы в него передали)
*/



// Тут мы отлавливаем ошибку

// let promiseSecond = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('Произошла ошибка'))
//   }, 1000);
// });


// promiseSecond.catch((error) => console.log(error));


// Для простоты понимания у promise есть внутренние свойства (state и result)

/*
  Когда мы используем resolve, то в свойствах будет:
    state: fulfilled
    result: value
    
  Когда мы используем reject, то в свойствах будет:
    state: rejected
    result: error
*/






// На практике это используется так

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     // Тут происходят какие-то вычисления и в зависимости от этого мы переходим в ветвление 

//     if (true) {
//       resolve('Промис выполнился успешно!');
//     } else {
//       reject(new Error('Произошла ошибка'));
//     }
//   }, 1000);
// });


// promise1.catch((error) => console.log(error));





// Теперь разберем методы у промиса


// .then принимает в качестве первого аргумента функцию, где в параметре мы можем достать дату, которую мы передали при успешном выполнении промиса

// также там может быть второй аргумент, который будет принимать ошибки в случае выполнения reject

// promise1.then(
//   (data) => console.log(data),
//   (error) => console.log(error)
// );


// ещё есть метод catch, который принимает только один параметр error

// promise1
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// есть метод finally, который будет всегда срабатывать вне зависимости от того, как отработал код (он не принимает никаких аргументов)

// promise1
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('Finally'));








// Сейчас пример такой: Я пришел на кухню из комнаты, открыл холодильник и съел эту еду!



// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Я пришел на кухню из комнаты, ');
//   }, 1000);
// });
// // этот промис отвечает за то, когда мы пришли из комнаты на кухню
// promise
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(result + 'открыл холодильник ');
//       }, 1500);
//     })
//       .then((result2) => {
//         console.log(result2);
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             resolve(result2 + 'и съел эту еду!')
//           }, 2000)
//         }).then((data) => console.log(data));
//       })
//   });





// ТЕМА ОБРАБОТКИ ОШИБОК ВНУТРИ НАШЕГО ПРОМИСА

// как мы помним из предыдущего урока, внутри каждого промиса(функции) неявно прорабатывает конструкциия try...catch
// let promise2 = new Promise((resolve, reject) => {
//   resolve();
// });

// promise2
//   .then((result3) => {
//     erewrewr;
//   })
//   .catch((error) => console.log(error));




// ПРОДОЛЖАЮ УЧИТЬ ПРОМИСЫ 21/10 (Статические методы. Async, await.)



//Статические методы промисов

// const getPromise = (time, isResovle = true) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isResovle) {
//         resolve(time);
//       } else {
//         reject(new Error('Ошибка!'));
//       }
//     }, time)
//   })
// }


// //первый статический метод промиса .all

// /*
//   Допустим у нас есть 3 промиса, то есть 3 запроса на сервер и мы хотели бы, чтобы они работали параллельно друг другу, то есть
//   не по цепочке промисов, а параллельно. Финальный результат получаем по окончанию финального запроса и собрать эту информацию в одно место
//   и допустим передать в 4 запрос
// */

// // метод принимает массив промисов (он выводит массив из этих объектов, и если там есть ошибка, то выводит только её)
// Promise.all([getPromise(1000), getPromise(2000), getPromise(2500)]).then((data) => console.log(data)).catch((error) => console.log(error));


// // этот метод выводит все массивы (с внутренними свойствами state и result у каждого объекта)
// Promise.allSettled([getPromise(1000), getPromise(2000, false), getPromise(2500)]).then((data) => console.log(data)).catch((error) => console.log(error));


// // возвращает первый выполненный промис
// Promise.race([getPromise(1000), getPromise(2000, false), getPromise(2500)]).then((data) => console.log(data)).catch((error) => console.log(error));


// // возвращает первый положительный промис
// Promise.any([getPromise(1000), getPromise(2000, false), getPromise(2500)]).then((data) => console.log(data)).catch((error) => console.log(error));






// async, await


// const getNumber = (number) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(number);
//     }, 1500)
//   })
// };


// const printNumber = (number) => {
//   return new Promise((resolve) => {
//     getNumber(number).then(result => {
//       resolve(result);
//     })
//   })
// };

// printNumber(250).then((data) => console.log(data))


// // Чтобы не писать так много и сократить свое время, мы используем async, await


// const getNumberSecond = (number) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(number);
//     }, 1500)
//   })
// };


// //Во-первых, эту функцию мы должны сделать асинхронной. Благодаря async мы делаем функцию промисом 
// // await дожидается, когда функция getNumberSecond придет в состояние выполнено и уже после этого запишет этот результат в result 
// const printNumberSecond = async (number) => {
//   const result = await getNumberSecond(number);
//   return result;

//   // return new Promise((resolve) => {
//   //   getNumberSecond(number).then(result => {
//   //     resolve(result);
//   //   })
//   // })
// };

// printNumberSecond(456).then((data) => console.log(data));




















// Модули, введение 23/10




// 1 Что такое модуль?


// Модуль – это просто файл. Один скрипт – это один модуль.

/*
  Модули могут загружать друг друга и использовать директивы export и import, чтобы обмениваться функциональностью,
  вызывать функции одного модуля из другого:

  - export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
  - import позволяет импортировать функциональность из других модулей.
*/

// // 📁 sayHi.js
// export function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }



// // 📁 main.js
// import { sayHi } from './sayHi.js';

// alert(sayHi); // function...
// sayHi('John'); // Hello, John!




// // чтобы экспортировать определенную функцию в html надо прописать так:

// //say.js
// export function sayHi(user) {
//   return `Hello, ${user}!`;
// }

// //html
// <script type="module">
//   import {sayHi} from './say.js';

//   document.body.innerHTML = sayHi('John');
// </script>





// Если нам надо экспортировать много чего из другого файла,
// что можем использовать это: 
// // 📁 say.js
// function sayHi(user) {
//   alert(`Hello, ${user}!`);
// }

// function sayBye(user) {
//   alert(`Bye, ${user}!`);
// }

// export { sayHi, sayBye };



// // 📁 main.js
// import * as say from './say.js';

// say.sayHi('John');
// say.sayBye('John');




// // Импорт «как»

// // 📁 main.js
// import { sayHi as hi, sayBye as bye } from './say.js';

// hi('John'); // Hello, John!
// bye('John'); // Bye, John!


// // Экспортировать «как»

// // 📁 say.js
// export { sayHi as hi, sayBye as bye };


// // 📁 main.js
// import * as say from './say.js';

// say.hi('John'); // Hello, John!
// say.bye('John'); // Bye, John!





// ДИНАМИЧЕСКИЕ ИМПОРТЫ 25/10

//быстро прочитал (если что, то вернусь и прочитаю заново)




















