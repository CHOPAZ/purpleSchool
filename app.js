/*
	Дан произвольный url - 
	'https://purpleschool.ru/course/javascript'
	Нужно сделать функцию, которая выводит в консоль:
	- Протокол (https)
	- Доменное имя (purpleschool.ru)
	- Путь внутри сайта (/course/javascript)
*/

const url = 'https://purpleschool.ru/course/javascript';

const getUrlParts = (url) => {
  const [protocol, _, domen, ...rest] = url.split('/');
  if(protocol === 'https:' || protocol === 'http:') {
    if(!domen.includes('.')) {
      return
    }
    console.log(`Протокол: ${protocol.split(':')[0]}`);
    console.log(`Доменное имя: ${domen}`);
    console.log(`Путь внутри сайта: /${rest.join('/')}`);
  }
}

getUrlParts(url)
