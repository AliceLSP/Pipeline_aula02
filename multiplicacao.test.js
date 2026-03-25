const { multiplicacao, soma } = require("./multiplicacao.js");

test('multiplicacao de dois valores', () => {
  expect(multiplicacao(2, 4)).toBe(8);
});

test('soma de dois valores', () => {
  expect(soma(0, 4)).toBe(4);
});

// arquivo de teste
// Testando git branch