/*
 * План занятия
 *
 * Методы массивов:
 * - forEach
 * - map
 * - filter
 * - find
 * - every и some
 * - reduce
 * - sort
 * - Чейнинг методов
 */

// Большинство методов не изменяет оригинальный массив
// Пример. У нас есть базовый массив и нам нужно что-то в нем изменить
//  Мы изменяем не в нем мы будем делать новый и в этом новом будут измененные данные а старый остаеться неизменным
// сейчас такой подход в разработке

/*
 *  Метод forEach
 * Array.prototype.forEach(callbac(currentValue, index, array), thisAgs)
 * - Поэлементно перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log(number);
// });

// console.log(numbers);

// там где у тебя был for или for...of можешь использовать forEach

// Сейчас такой подход имутабельность - это когда ты не хочешь что-то изменять в существующих данных
// ты хочшь на их базе создать новые данные и просто переписать в эту переменную
// Не изменять новый массив а создать массив и его подменить

/*
 * Array.prototype.map()
 * - Поэлементно перебирает оригианльный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(function (number) {
//   console.log(number);

//   return number * 2;
//   // поставишь *2 все значения уножиться на 2
// });

// console.log(numbers);
// console.log(doubledNums);

// 99% работы с данными это будет массив обьектов

// Метод map() - позволяет получить список свойств из обьекта. Например. Получить массив их имен
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const playerNames = players.map(player => {
//     console.log(player)

//   return player.name
//   // ретерн возвращает одно значение и через запятую не получиться перечислить значения
// })

// console.log(playerNames)

/*
 * Получаем массив всех игроков
 */

// const playerNames = players.map((player) => player.name);
// console.log(playerNames);

// const playerIds = players.map((player) => player.id);
// console.log(playerIds);

// const playerOnline = players.map((player) => player.online);
// console.log(playerOnline);

// const playerPoints = players.map((player) => player.points);
// console.log(playerPoints);

// const playersTimePlayed = players.map((player) => player.timePlayed);
// console.log(playersTimePlayed);

// // когда мы хотим вернуть 2 значения в стрелочной записи
// const res = players.map(({ name, online }) => ({ name, online }));
// console.log(res);

// /*
//  * Увеличиваем количество принтов каждого игрока на 10%
//  */

// const upatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.table(upatedPlayers);

// Решили в 3 шага
// 1 вернули новый обьект
// 2 распыллили в него страый
// 3 подминили у него свойство points

// map() - используеться для обновления вытянуть что-то из каждого элемента или обновить все или какой-то один

// А если нужно обновить свойства одного человека?
// Нам нужно сделать новый массив с одним измененым id

/*
 * Увеличиваем количество часов игрока по id
 */

// Брейкнуть или континее нельзя прим енить к перебирающим методам это только в цикл
// Пример хорошего синтаксиса
// const playerIdToUpdate = "player-3";

// const upatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     }
//   }
//   return player
// })

// console.table(upatedPlayers)

// ТОже самое с тернарным оператором
// const playerIdToUpdate = "player-3";

// const upatedPlayers = players.map((player) =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : // распыление это мы делаем копию обьекта
//       player
// );

// console.table(upatedPlayers);

/*
 * Array.prototype.filter()
 * - Поэлементно перебирает оригинальный массив
 * - Вщзвращает новый массив (с элементами или пустой)
 * - Добавляет в возвращаемый массив элементы которые удовлетворяют условию колбек-функции
 * - если колбек вернул true элемент добавляется в возвращаемый массив
 * - если колбек вернул false элемент НЕ добавляется в возвращаемый массив
 */

// const numbers = [5, 10, 15, 20, 25]
// console.log(numbers)

// const filteredNumbers = numbers.filter(number => number < 10 || number > 20)
//   // тут можно писать любое условие лишь бы оно вернуло тру или фолс
//   // вернет true елемент запишеться в новый массив если вернет false элемент НЕ запишеться
// console.log(filteredNumbers)

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// filter - умеет только фильтровать по условию какому-то

/*
 * Полчучаем массив всех онлайн игроков
 */

// const onlinePlayers = players.filter(player => player.online)
// тут мы просто говорим по какому условию отфильтровать
// console.table(onlinePlayers)

/*
 * Получаем массив всех оффлайн игроков
 */

// const onlinePlayers = players.filter((player) => !player.online);
// // тут мы просто говорим по какому условию отфильтровать
// console.table(onlinePlayers);

// /*
// * Получаем список хардкорных игроков с временем больше 250
// */

// const hardcorePlayers = players.filter(player => player.timePlayed > 250)
// console.table(hardcorePlayers)

/*
 * Array.prototype.find()
 * - Поэлементно перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */

// fins() - используеться для поиска уникальных элементов в коллекции
const numbers = [5, 10, 15, 20, 25];

const number = numbers.find((number) => number === 10);
console.log(number);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];
// мы получим первый элемент который удовлетворяет этому условию
// как только находит первый подходящий элемент то оно перестает дальше проверять

/*
 * Ищем игрока по id
 */

const playerIdToFind = "player-3";

const playerWithId = players.find((player) => player.id === playerIdToFind);
console.log(playerWithId);

/*
 * Ищем игрока по имени
 */

const playerNameToFind = "Poly";

const playerWithName = players.find(
  (player) => player.name === playerNameToFind
);
console.log(playerWithName);

