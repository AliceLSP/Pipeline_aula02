const multiplicacao = require("./multiplicacao.js");

test('multiplicacao de dois valores', () => {
  expect(multiplicacao(2, 4)).toBe(8);
});

test('multiplicacao de dois valores, em que um é 0', () => {
  expect(multiplicacao(0, 4)).toBe(0);
});

// arquivo de teste
// Testando git branch