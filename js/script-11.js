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
// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number) => number === 10);
// console.log(number);

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];
// мы получим первый элемент который удовлетворяет этому условию
// как только находит первый подходящий элемент то оно перестает дальше проверять

/*
 * Ищем игрока по id
 */

// const playerIdToFind = "player-3";

// const playerWithId = players.find((player) => player.id === playerIdToFind);
// console.log(playerWithId);

/*
 * Ищем игрока по имени
 */

// const playerNameToFind = "Poly";

// const playerWithName = players.find(
//   (player) => player.name === playerNameToFind
// );
// console.log(playerWithName);

/*
 * Array.prototype.every()
 * - Поэлементно перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворют условию
 */

/*
 * Проверить или все игроки онлайн?
 */

// const isAllOnline = players.every((player) => player.online);
// console.log(isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементно перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворет условию
 */

/*
 * Проверяет хотя бы один есть онлайн?
 */

// const isAnyOnline = players.some((player) => player.online);
// console.log(isAnyOnline);

// Возвращает статус true или false а обьекты не возвращает

// filter и find - для того чтобы найти обьекты а every и some проверить или один или все онлайн?

/*
 * Array.prototype.reduce()
 * - Поэлементно перебирает оригинальный массив
 * - Возвращает что угодно
 * - Заменяет все на свете но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 150,
//   poly: 50,
//   ajax: 100,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);

// 0 - это начальное значение с чего мы начинаем считать
// Начальные условием может быть массив или обьект

/*
 * Считаем общее количество часов
 */

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const totalTimePlayer = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0
// );

// console.log(totalTimePlayer);

// /*
//  * Считаем общую сумму товаров корзины
//  */

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const totalAmmount = cart.reduce(
//   (total, item) => total + item.price * item.quantity,
//   0
// );

// console.log(totalAmmount);

// Прогресс идет к более декларативному програмированию чтобы писать пару символов и все работало

/*
 * Собираем все теги из твитов
 */

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);

// /*
//  * Ведем статистику тегов
//  */

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// console.log(tagsStats);

// Изучение языка и изучение програмирования - это две разные вещи
// Програмирование - это алгоритмическое мышление. Только на практике решением задач
// Это решение проблем с которыми ты раньше не сталкивался базируясь на тех знаниях которые у тебя сейчас есть

// const objactA = {
//   a: 10,
//   b: true,
// };

// // console.log(objactA)

// // objactA.a = 20;
// // console.log(objactA)

// // objactA.c = 'abc'
// // objactA.r = 12
// // console.log(objactA)

// const objactB = objactA;

// objactB.a = 50;
// objactB.c = 123;
// console.log(objactA);

// console.log(objactB);

// function a() {
//   console.log('Hey there')
// }

// a()

// a = 10

// a()

// const a = () => {
//   console.log("Hey there");
// };

// a();

// a = 10;

// a();

// JS - это динамически типизируемый язык. Потому что тип переменной не указываеться когда эта переменная обьявляеться


// const numbers = [5, 10, 15, 20, 25]
// let total = 0

// numbers.forEach(function (number) {
//   console.log('number -', number)

//   total += number * 2
// })

// console.log('total:', total)
// let total = 0
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Poly', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ]

// console.log(players)

// const playerId = players.map(player => player.id)
// console.log(playerId)

// const playerName = players.map(player => player.name)
// console.log(playerName)

// const playerTimePlayed = players.map(player => total += player.timePlayed)
// console.log(total)


// const playerPoint = players.map(player => player.points)
// console.log(playerPoint)

// const playerOnline = players.map(player => player.online)
// console.log(playerOnline)

// const updatePlayers = players.map(player => {
//   return {
//     ...player,
//     points: Math.round(player.points * 1.1),
//   }
// })
// console.log(updatePlayers)

// const playerIdToUpdate = 'player-1'

// const updatePlayers = players.map(player => {
//   // console.log(player.id)
//   if(player.id === playerIdToUpdate) {
//     return {
//       ...player,
//       id: player.id = 'update-player',
//       name: player.name = 'Rita',
//       timePlayed: player.timePlayed + 100,
//       points: player.points = 50,
//       online: player.online = true
//     }
//   }

//   return player
// })

// console.table(updatePlayers)

// const numbers = [5, 10, 15, 20, 25]

// const filteredNumbers = numbers.filter(number => {
//   console.log(number)

//   return number < 10 || number > 20
// })

// console.log(filteredNumbers)


// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Poly', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ]

// console.log(players)

// const onlinePlayers = players.filter(player => player.online)
// console.log(onlinePlayers)

// const offlinePlayers = players.filter(player => !player.online)
// console.log(offlinePlayers)

// const pointsPlayers = players.filter(player => player.points > 70)
// console.log(pointsPlayers)

// const timePlayers = players.filter(player => player.timePlayed > 400)
// console.log(timePlayers)

// const namePlayers = players.filter(player => player.name === 'Mango')
// console.log(namePlayers)

// const idPlayers = players.filter(player => player.id === 'player-3')
// console.log(idPlayers)

// const playerWithId = players.find(player => player.id === 'player-2')
// console.log(playerWithId)

// const playerIdToFind = 'player-2'

// const playerWithId = players.find(({ id }) => id === playerIdToFind)
// console.log(playerWithId)

// const isAllOnline = players.every(player => player.online) 
// console.log(isAllOnline)

// const isAllPoints = players.every(player => player.points > 40) 
// console.log(isAllPoints)

// const isAnyOnline = players.some(player => player.online)
// console.log(isAnyOnline)



// const numbers = [5, 10, 15, 20, 25]

// const total = numbers.reduce((acc, number) => acc + number, 0)

// console.log('total -', total)


// const salary = {
//   mango: 100,
//   poly: 50,
//   kiwi: 150,
// }

// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0)
// console.log(totalSalary)

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed, 
//   0
//   )

// console.log(totalTimePlayed)

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemous', price: 70, quantity: 4 },
// ]

// const totalAmmount = cart.reduce((total, item) => {
//   return total + item.price * item.quantity
// }, 0)

// console.log(totalAmmount)


// const totalAmmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
// 0,
// )

// console.log(totalAmmount)

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'node.js'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'node.js'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'node.js', 'react'] },
]

// const allTags = tweets.reduce((tags, tweet) => {
// //  tags.push(...tweet.tags)

//  return [...tags, ...tweet.tags]
// }, [])

// console.log(allTags)

// const tagsStats = allTags.reduce(
//   (acc, tag) => ({
//   ...acc, 
//   [tag]: acc[tag] ? acc[tag] +1 : 1,
// }),
// {},
// )

// console.log(tagsStats)

const stats = tweets
.flatMap(t => t.tags)
.reduce((acc, tag) => ({
    ...acc, 
    [tag]: acc[tag] ? acc[tag] +1 : 1,
  }),
  {},
  )

console.log(stats)

// сорт меняеть расположение єлементов он ничего не выкидывает
// const numbers = [1, 9, 6, 2, 3]
// numbers.sort((start, end) => {
//   return end - start
// })

// console.log(numbers)

// const letters = ['b', 'B', 'a', 'A']
// letters.sort()

// console.log(letters)

// const copyNumbers = [...numbers].sort((a, b) => b - a)

// console.log(copyNumbers)

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Poly', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ]

// const softByBestPlayers = [...players].sort((startPlayer, endPlayer) => {
//   return endPlayer.timePlayed - startPlayer.timePlayed;
// })

// console.log(softByBestPlayers)

// 

// const numbers = [1, 5, 2, 4, 3]

// const sorted = numbers
// .filter(num => num > 2)
// .map(num => num * 3)
// .sort((a, b) => a -b)

// console.log(sorted)

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false, rank: 800 },
//   { id: 'player-2', name: 'Kiwi', timePlayed: 470, points: 92, online: true, rank: 600 },
//   { id: 'player-3', name: 'Poly', timePlayed: 230, points: 48, online: true, rank: 100 },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false, rank: 50 },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true, rank: 200 },
// ]

// const onlineAndSorted = players
// .filter(player => player.online)
// .sort((start, end) => start.rank - end.rank)

// console.table(onlineAndSorted)