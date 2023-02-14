/*
  IIFE - intermedia invoke function expression - служило механизмом инкапсуляции - закрыть доступ к функции.

*/
'use strict';
function init () {
  console.log('start');
}

init(); // - мы можем вызвать ее несколько раз, например несколько раз запросим инфу с бэка - что есть плохо, поэтому появилась возможность писать функции следующим образом:

(function () {
  console.log('start IIFO');
  const a = 1
})() // - позволяет все что внутри заключить внутрь нашей функции и никто извне не может получить туда доступ

// p.s - это все было до ES6, встречается редко