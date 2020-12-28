function deliverPizza(pizzaName) {
  return `Доставляем пиццу ${pizzaName}.`;
}

function makePizza(pizzaName) {
  return `Пицца ${pizzaName} готовится, ожидайте...`;
}

// Пиши код ниже этой строки
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

makeMessage('Роял гранд', makePizza); // возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
makeMessage('Ультрасыр', deliverPizza); // возвращает строку 'Доставляем пиццу Ультрасыр.'

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
