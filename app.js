const projectName = 'Website';
const price = 2000;
const author = 'Anton'

const template = author + ' buy ' + projectName + ' price ' + price
console.log(template);

// Шаблонные строки ``

const template2 = `${author} buy ${projectName} price ${price}`
console.log(template2);

const template3 = 'Project \n' + 'Price: ' + price + '$'
console.log(template3);

const template4 = `Project
Price: ${price}$`;
console.log(template4);