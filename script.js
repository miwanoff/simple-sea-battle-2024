let location1 = 3; // розташування 1 клітини корабля
let location2 = 4; // розташування 2 клітини корабля
let location3 = 5; // розташування 3 клітини корабля

let ship = [0, 0, 0, 1, 1, 1, 0]; // замість location1, location2, location3
let arr =[]; // сюди можна додавати номери клітинок, куди стріляли
let guess; // постріл
let hits = 0; // влучення
let guesses = 0; // спроби
let isSunk = false; // корабель ще не потоплений


while (isSunk == false) { // поки корабель не потонув
  guess = +prompt("Ваш постріл! (введіть число від 0 до 6):");  
  if (guess < 0 || guess > 6 || isNaN(guess)) {
    alert("Введіть правильний номер!");
  } else {
    guesses++; // рахуємо спроби
    // if (ship[guess] == 1){ // Якщо в масиві ship під номером guess міститься 1

    // }
      // for (let i = 0; i < ship.length; i++) { // можна перевірити, чи залишилися у масиві ще 1
    //     if(ship[i] == 1) {
    //        
    //     };
        
    // }
   // if (guess === 3 || guess === 4 || guess === 5) {
    if (ship[guess] == 1){ // Якщо в масиві ship під номером guess міститься 1
                           // Записуємо туди -1
      alert("Влучив!");
      hits++;
      alert("Влучення: " + hits);
    } else {
      alert("Промах!");
    }
    if (hits === 3) { // Замінити перевіркою, чи залишилися в масиві 1
      alert("Ви потопили корабель!");
      isSunk = true;
    }
  }
}

alert("Гру закінчено!");
