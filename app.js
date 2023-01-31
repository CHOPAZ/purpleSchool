/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив

  DRY - Don't repeat yourself
*/

const tasks = ['Задача 1',];

const addNewTask = (task) => tasks.push(task);

const removeTask = (task) => {
  const index = tasks.indexOf(task);
  if(index === -1){
    return
  }
  return tasks.splice(index,1)
};

const priorityTask =(task) => {
  const res = removeTask(task);
  if (!res) {
    return
  }
  tasks.unshift(res[0]);

}
addNewTask('Задача 2');
addNewTask('Задача 3');
console.log(tasks);
removeTask('Задача 2')
console.log(tasks);
addNewTask('Задача 4')
priorityTask('Задача 4');
console.log(tasks);
