/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
  balance: 0,
  operations: [],
  getIncreaseBalance: function (reasons, sums) {
      this.balance += sums;
      return this.operations.push({reason: reasons, sum: sums})
  },
  getDecreaseBalance: function (reasons, sums) {
    if (this.balance < sums) {
      console.log('Недостаточно баланса');
      return false;
    }
      this.balance -= sums;
      this.operations.push({reason: reasons, sum: -sums});
      return true
  },
  getAmountOperations: function () {
    return this.operations.length
  }
};

console.log(wallet);
wallet.getIncreaseBalance('Чаевые', 10000);
wallet.getDecreaseBalance('Оплата налогов', 1000);
console.log(wallet.getAmountOperations());