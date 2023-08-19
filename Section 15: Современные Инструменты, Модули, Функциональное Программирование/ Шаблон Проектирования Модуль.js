// Шаблон Проектирования Модуль

const ShoppingCart1 = (function () {
  const cart = [];
  const shippingCost = 20;
  const totalPrice = 300;
  const totalQuantity = 10;
  const addProductToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${product} в количестве ${quantity} шт добавлено в корзину, цена доставки ${shippingCost}`
    );
  };

  const productOrderedMessage = function (product, quantity) {
    console.log(`${product} в количестве ${quantity} шт заказан`);
  };

  return {
    addProductToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart1.addProductToCart('апельсин', 5);
ShoppingCart1.addProductToCart('кола', 1);
console.log(ShoppingCart1);