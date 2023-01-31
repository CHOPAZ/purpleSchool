/*
	Дан список задач
	const tasks = ['Задача 1'];
	Сделать функции:
	- Добавление задачи в конец
	- Удаление задачи по названию
	- Перенос задачи в начало списка по названию 
	Всегда меняем исходный массив
*/

const tasks = ['Задача 1',];

const addNewTask = (task) => tasks.push(task);
addNewTask('Задача 2');
addNewTask('Задача 3');
// console.log(tasks);


const removeTask = (task) => {
  const index = tasks.indexOf(task);
  if(index === -1){
    return
  }
  tasks.splice(index,1)
};
removeTask('Задача 2');
// console.log(tasks);


const priorityTask =(task) => {
  const index = tasks.indexOf(task);
  console.log(index);
	if (index === -1) {
		return;
	}
	const oldTask = tasks[index];
	tasks.splice(index, 1);
	tasks.unshift(oldTask);

}
addNewTask('Задача 4')
priorityTask('Задача 4');
console.log(tasks);
