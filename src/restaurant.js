let restaurant = {};
const orderFromMenu = (request) => restaurant.consumption.push(request);

const comparaDrink = (consumoDrink, valorDrinks, menu) => {
  let valoresMenu = 0;
  if (consumoDrink === menu) {
    valoresMenu += valorDrinks;
  }
  return valoresMenu;
};

const comparaFood = (consumoFood, valorFood, menu) => {
  let valoresMenu = 0;
  if (consumoFood === menu) {
    valoresMenu += valorFood;
  }
  return valoresMenu;
};

const somaValores = () => {
  const menuFood = Object.keys(restaurant.fetchMenu().food);
  const menuDrinks = Object.keys(restaurant.fetchMenu().drinks);
  const valorFood = Object.values(restaurant.fetchMenu().food);
  const valorDrinks = Object.values(restaurant.fetchMenu().drinks);
  let valoresMenu = 0;
  for (let i = 0; i < menuFood.length; i += 1) {
    for (let i2 = 0; i2 < restaurant.consumption.length; i2 += 1) {
     valoresMenu += comparaFood(menuFood[i], valorFood[i], restaurant.consumption[i2]);
     valoresMenu += comparaDrink(menuDrinks[i], valorDrinks[i], restaurant.consumption[i2]);
    }
  }
  return valoresMenu * 1.1;
};

const createMenu = (object) => {
  restaurant = {
    fetchMenu: () => object,
    consumption: [],
    order: (pedido) => orderFromMenu(pedido),
    pay: () => somaValores(),
  };
  return restaurant;
};

module.exports = createMenu;

// const objetoRetornado = createMenu({
//   food: {'coxinha': 3.90, 'sanduiche': 9.90},
//   drinks: {'agua': 3.90, 'cerveja': 6.90}
// });
// objetoRetornado.order('coxinha')
// objetoRetornado.order('agua');
// objetoRetornado.order('sanduiche');
// objetoRetornado.order('cerveja');
// objetoRetornado.order('coxinha');
// objetoRetornado.order('agua');

// console.log(objetoRetornado.pay());