'use strict'

let habbits = []; // Состояние приложения фактически
const HEBBIT_KEY = 'HEBBIT_KEY';

/* utils */

function loadData () { //Загрузка данных
  const habbitsString = localStorage.getItem(HEBBIT_KEY); // получили строку
  const habbitArray = JSON.parse(habbitsString); //Распарсили строку в массив
  if (Array.isArray(habbitArray)) { //Возвращает true если массив 
    habbits = habbitArray;
  }
}

function saveData () { //Сохранение данных
  localStorage.setItem(HEBBIT_KEY, JSON.stringify(habbits))
}

(() => {
  loadData();
})();