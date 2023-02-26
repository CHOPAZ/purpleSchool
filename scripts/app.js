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
  },
  popup: {
    index: document.getElementById('habbit-popup'),
    iconField: document.querySelector('.popup__form input[name="icon"]')
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

function validateAndGetFormData(form, fields) { //fields - список полей(name, comment и тд)
  const formData = new FormData(form);
  const res = {};
  for (const field of fields) {
    const fieldValue = formData.get(field);
    form[field].classList.remove('error');
    if (!fieldValue) {
      form[field].classList.add('error');
    }
    res[field] = fieldValue;
  }

  let isValid = true;
  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return
  }
  return res
}

function resetForm(form, fields) {
  for (const field of fields) {
    form[field].value = '';
  }
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
      <button class="habbit__delet"><img src="./images/delete.svg" alt="Delet" onclick="removeDay(${index})"></button>
    `;
    page.content.daysContainer.appendChild(element);
  }

  page.content.nextDay.innerText = `День ${activeHabbit.days.length + 1}`;



}

/* work with add new days comment  */

function addDays(event) {
  event.preventDefault();
  const data = validateAndGetFormData(event.target, ['comment'])
  if (!data) {
    return;
  }
  habbits = habbits.map(item => {
    if (item.id === glovalActiveHabbitId) {
      return {
        ...item,
        days: item.days.concat([{comment: data.comment}])
      }
    }
    return item;
  })
  resetForm(event.target, ['comment']);
  rerender(glovalActiveHabbitId);
  saveData(); //сохраняем коммент, что бы при обновлении не исчезал новый коммент
}

/* remove day */

function removeDay(index) {
  habbits = habbits.map(item => {
    if (item.id === glovalActiveHabbitId) {
      item.days.splice(index, 1);
      return {
        ...item,
        days: item.days
      };
    } 
    return item
  });
  rerender(glovalActiveHabbitId);
  saveData();
}


function rerender(activeHabbitId) {
  glovalActiveHabbitId = activeHabbitId;
  const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId); 
  if (!activeHabbit ) {
    return; // если нет активного меню, или массив пустой ничего не делать
  }

  // получениея хэша
  document.location.replace(document.location.pathname + '#' + activeHabbitId)

  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
}

/* toggle popup */

function togglePopup() {
  if (page.popup.index.classList.contains('cover_hidden')) {
    page.popup.index.classList.remove('cover_hidden')
  } else {
    page.popup.index.classList.add('cover_hidden')
  }
  
}

/* установка новой иконки в скрытый инпут*/

function setIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcon = document.querySelector('.icon.icon_active');
  activeIcon.classList.remove('icon_active');
  context.classList.add('icon_active');
}

/* add new habbit */

function addHabbit(event) {
  event.preventDefault();
  const data = validateAndGetFormData(event.target, ['name', 'icon', 'target'])
  if (!data) {
    return;
  }
  const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id, 0)
  habbits.push({
    id: maxId + 1,
    name: data.name,
    target: data.target,
    icon: data.icon,
    days: []
  })
  resetForm(event.target, ['name', 'icon', 'target']);
  togglePopup();
  saveData();
  rerender(maxId + 1)
}

/* init */

(() => {
  loadData();
  const hashId = Number(document.location.hash.replace('#', ''))
  const urlHabbit = habbits.find(habbit => habbit.id === hashId);
  if (urlHabbit) {
    rerender(urlHabbit.id)
  } else {
    rerender(habbits[0].id)
  }
  // rerender(habbits[0].id) //Начальное значение активного меню
})();