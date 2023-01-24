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

const numbers = [5, 10, 15, 20, 25]

const doubledNums = numbers.map(function (number) {
    console.log(number)

    return number * 2
    // поставишь *2 все значения уножиться на 2
})

console.log(numbers)
console.log(doubledNums)

// 99% работы с данными это будет массив обьектов

// Метод map() - позволяет получить список свойств из обьекта. Например. Получить массив их имен
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map(player => {
    console.log(player)

    return player.name
})

console.log(playerNames)
