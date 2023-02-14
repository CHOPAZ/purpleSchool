//EOL - enhanced object literal для методов


'use strict'

const b = 1;

const a = {
  b,
  getB: function () {
    return this.b;
  },
  getBAlt () { // EOL
    return this.b;
  }
}

console.log(a.getBAlt());