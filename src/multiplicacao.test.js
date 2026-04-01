const { multiplicacao, soma } = require("./multiplicacao.js");

test('soma de dois valores', () => {
  expect(soma(4, 6)).toBe(10);
});

test('multiplicacao de dois valores', () => {
  expect(multiplicacao(2, 4)).toBe(8);
});
