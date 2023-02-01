//Break and continue

const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4'];

// Благодаря continue мы можем пропускать какието элементы
for (let i = 0; i < tasks.length; i++){
  if (tasks[i] === 'Задача 2') {
    continue
  }
  console.log(tasks[i]);
}

//break прекращает выполнение всего цикла
for (let i = 0; i < tasks.length; i++){
  if (tasks[i] === 'Задача 2') {
    break
  }
  console.log(tasks[i]);
}