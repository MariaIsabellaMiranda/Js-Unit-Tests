const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {

    expect(typeof productDetails).toBe('function');

    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();

    expect(productDetails('Alcool gel', 'Máscara').length).toEqual(2);

    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');

    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Máscara', 'Alcool gel')[1]);

    const comparaProductIds = productDetails('Alcool gel', 'Máscara');
    expect(comparaProductIds[0].details.productId).toMatch('123');
    expect(comparaProductIds[1].details.productId).toMatch('123');
  });
});
