/* 
  дополнить объект методами для получения имени:
  - компании
  - сео
  - сотрудника
*/

'use strict';

const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
    }
  ],
  ceo: {
    name: 'Вася'
  },
  getNameCompany: function() {
    return this.name;
  },
  getNameCeo: function() {
    return this.ceo.name;
  },
  getNameEmpoyees: function() {
    const nameEmpoyees = this.employees.map(e => {
      return e.name;
    })
    return nameEmpoyees;
  }

}

console.log(company.getNameCompany());
console.log(company.getNameCeo());
console.log(company.getNameEmpoyees());


// еще вариант
const company2 = {
	name: 'ООО Агро',
	employees: [
		{ 
			name: 'Света',
			getName: function () {
				return this.name;
			}
		}
	],
	ceo: {
		name: 'Вася',
		getName: function () {
			return this.name;
		}
	},
	getName: function () {
		return this.name;
	}
}

console.log(company2.getName());
console.log(company2.ceo.getName());
console.log(company2.employees.map(employee => employee.getName()));