// Использование библиотеки lodash-es
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'яблоко', quantity: 5 },
    { product: 'апельсин', quantity: 3 },
  ],
  user: { loggedIn: true },
};
const stateCopy = Object.assign({}, state);
const stateDeepCopy = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateCopy);
console.log(stateDeepCopy);

if (module.hot) {
  module.hot.accept();
}

Promise.resolve('Testing').then(a => console.log(a));

import 'core-js/stable';

// Полифиллинг асинхронных функций
import 'regenerator-runtime/runtime';