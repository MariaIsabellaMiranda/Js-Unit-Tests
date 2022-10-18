const calculator = (number1, number2) => {
  const operacoes = {
    sum: Math.floor(number1 + number2),
    mult: Math.floor(number1 * number2),
    div: Math.floor(number1 / number2),
    sub: Math.floor(number1 - number2),
  };
  return operacoes;
};

const arrayGenerator = (type, object) => {
  if (type === 'keys') {
    return Object.keys(object);
  }
  if (type === 'values') {
    return Object.values(object);
  }
  return Object.entries(object);
};

console.log(arrayGenerator('entries', calculator(4, 5)));

module.exports = { calculator, arrayGenerator };
