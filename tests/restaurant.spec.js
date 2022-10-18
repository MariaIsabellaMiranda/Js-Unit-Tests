const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    expect(typeof createMenu().fetchMenu).toBe('function');

    let objetoRetornado = createMenu({ food: {}, drink: {} });
    expect(Object.keys(objetoRetornado.fetchMenu())).toEqual(["food", "drink"]);

    objetoRetornado = createMenu({
      food: {'coxinha': 3.90, 'sanduiche': 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });
    expect(objetoRetornado.fetchMenu()).toEqual({
      food: {'coxinha': 3.90, 'sanduiche': 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    expect(objetoRetornado.consumption).toEqual([]);

    objetoRetornado.order('coxinha')
    expect(objetoRetornado.consumption).toEqual(['coxinha']);
    
    objetoRetornado.order("agua");
    objetoRetornado.order("sanduiche");
    objetoRetornado.order("cerveja");
    expect(objetoRetornado.consumption).toEqual(["coxinha", "agua", "sanduiche", "cerveja"]);

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    expect(objetoRetornado.consumption).toEqual(["coxinha", "agua", "sanduiche", "cerveja", "coxinha", "agua"])

    expect(objetoRetornado.pay()).toBeCloseTo(35.64);

  });
});
