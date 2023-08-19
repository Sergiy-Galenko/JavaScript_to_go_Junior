// Модули CommonJS

// Экспорт чего-либо
export.addProductToCart = function (product, quantity) {
      cart.push({ product, quantity });
      console.log(
        `${product} в количестве ${quantity} шт добавлено в корзину, цена доставки ${shippingCost}`
      );
    };

// Импорт
const { addProductToCart } = require('./shopping-cart.js');