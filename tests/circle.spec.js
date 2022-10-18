/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('a')).toBeUndefined();
    // Teste se circle retorna um objeto.
    expect(typeof circle(1)).toEqual('object');
    // Teste se o objeto retornado tem 3 propriedades.
    expect(Object.keys(circle(1)).length).toEqual(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
    expect(Object.values(circle(2))[2]).toBeCloseTo(12.56);
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
    expect(Object.values(circle(3))[1]).toBeCloseTo(28.26);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toEqual({ radius: 3, area: 28.259999999999998, circumference: 18.84 });
  });
});
