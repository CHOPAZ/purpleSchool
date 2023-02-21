'use strict'

let habbits = []; // Состояние приложения фактически
const HEBBIT_KEY = 'HEBBIT_KEY';
let glovalActiveHabbitId;

/* page */

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPrecent: document.querySelector('.progress__precent'),
    progressCoverBar: document.querySelector('.progress__cover-bar')
  },
  content: {
    daysContainer: document.getElementById('days'),
    nextDay: document.querySelector('.habbit__day')
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
  page.header.h1.innerText = activeHabbit.name;
  const progress = activeHabbit.days.length / activeHabbit.target > 1 
    ? 100 
    : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPrecent.innerText = progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`)
    // page.header.progressCoverBar.style = `width: ${progress}%`
}


/* render - content */

function rerenderContent(activeHabbit) {
  page.content.daysContainer.innerHTML = '';
  for (const index in activeHabbit.days) {
    const element = document.createElement('div');
    element.classList.add('habbit');
    element.innerHTML = `
      <div class="habbit__day">День ${Number(index) + 1}</div>
      <div class="habbit__comment">${activeHabbit.days[index].comment}</div>
      <button class="habbit__delet"><img src="./images/delete.svg" alt="Delet"></button>
    `;
    page.content.daysContainer.appendChild(element);
  }

  page.content.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;



}

/* work with add new days comment  */

function addDays(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const comment = data.get('comment');
  form['comment'].classList.remove('error');
  if (!comment) {
    form['comment'].classList.add('error');
  }
  habbits = habbits.map(item => {
    if (item.id === glovalActiveHabbitId) {
      return {
        ...item,
        days: item.days.concat([{comment}])
      }
    }
    return item;
  })
  form['comment'].value = '';
  rerender(glovalActiveHabbitId);
  saveData(); //сохраняем коммент, что бы при обновлении не исчезал новый коммент
}


function rerender(activeHabbitId) {
  glovalActiveHabbitId = activeHabbitId;
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId); 
  if (!activeHabbit ) {
    return; // если нет активного меню, или массив пустой ничего не делать
  }
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
}

/* init */

(() => {
  loadData();
  rerender(habbits[0].id) //Начальное значение активного меню
})();