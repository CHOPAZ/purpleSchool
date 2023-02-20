'use strict'

let habbits = []; // Состояние приложения фактически
const HEBBIT_KEY = 'HEBBIT_KEY';

/* page */

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPrecent: document.querySelector('.progress__precent'),
    progressCoverBar: document.querySelector('.progress__cover-bar')
  }
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


/* render menu */

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

/* render - Header */

function rerenderHead(activeHabbit) {
  if (!activeHabbit ) {
    return; // если нет активного меню, или массив пустой ничего не делать
  }
  page.header.h1.innerText = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1 
    ? 100 
    : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPrecent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
    // page.header.progressCoverBar.style = `width: ${progress}%`
}


function rerender(activeHabbitId) {
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId); 
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
}

/* init */

(() => {
  loadData();
  rerender(habbits[0].id) //Начальное значение активного меню
})();