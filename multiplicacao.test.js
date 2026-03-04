const multiplicacao = require("./multiplicacao.js");

test('multiplicacao de dois valores', () => {
  expect(multiplicacao(2, 4)).toBe(8);
});