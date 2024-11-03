let location1 = 3; // розташування 1 клітини корабля
let location2 = 4; // розташування 2 клітини корабля
let location3 = 5; // розташування 3 клітини корабля

let ship = [0, 0, 0, 1, 1, 1, 0];
let arr =[];
let guess; // постріл
let hits = 0; // влучення
let guesses = 0; // спроби
let isSunk = false; // корабель ще не потоплений


while (isSunk == false) {
  guess = +prompt("Ваш постріл! (введіть число від 0 до 6):");  
  if (guess < 0 || guess > 6 || isNaN(guess)) {
    alert("Введіть правильний номер!");
  } else {
    guesses++;
    // if (ship[guess] == 1){

    // }
        ;
    // for (let i = 0; i < ship.length; i++) {
    //     if(guess ==  i) {
    //         ship[i] == 1;
    //     };
        
    // }
   // if (guess === 3 || guess === 4 || guess === 5) {
    if (ship[guess] == 1){        
      alert("Влучив!");
      hits++;
      alert("Влучення: " + hits);
    } else {
      alert("Промах!");
    }
    if (hits === 3) {
      alert("Ви потопили корабель!");
      isSunk = true;
    }
  }
}

alert("Гру закінчено!");
