//Enhance object literals - позволяющий писать более компактно
const wallet = {
  balance: 0,
  operations: [],
  getIncreaseBalance: function (reason, sum) {
      this.balance += sum;
      return this.operations.push({reason, sum})
  },
  getDecreaseBalance: function (reason, sum) {
    if (this.balance < sum) {
      console.log('Недостаточно баланса');
      return false;
    }
      this.balance -= sum;
      this.operations.push({reason, sum: -sum});
      return true
  },
  getAmountOperations: function () {
    return this.operations.length
  }
};

const balance = 0;
const wallet2 = {
  balance, // 0
  operations: []
}

const initialBalance = 7;
const wallet3 = {
  balance: initialBalance,
  operations: []
}
