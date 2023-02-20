'use strict'

let habbits = []; // Состояние приложения фактически
const HEBBIT_KEY = 'HEBBIT_KEY';

/* page */

const page = {
  menu: document.querySelector('.menu__list')
}

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


/* render */

function rerenderMenu(activeHabbit) {
  if (!activeHabbit ) {
    return; // если нет активного меню, или массив пустой ничего не делать
  }

  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"`);
    if (!existed) { //если такого не существует, то мы его создаем
      const element = document.createElement('button');
      element.setAttribute('menu-habbit-id', habbit.id)
      element.classList.add('menu__item');
      element.addEventListener('click', () => rerender(habbit.id));
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}" />`;
      if (activeHabbit.id === habbit.id) {
        element.classList.add('menu__item_active');
      }

      page.menu.appendChild(element);
      continue;
    }

    if (activeHabbit.id === habbit.id) {
			existed.classList.add('menu__item_active');
		} else {
			existed.classList.remove('menu__item_active');
		}
  }

}


function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId); 
  rerenderMenu(activeHabbit);
}

/* init */

(() => {
  loadData();
  rerender(habbits[0].id) //Начальное значение активного меню
})();