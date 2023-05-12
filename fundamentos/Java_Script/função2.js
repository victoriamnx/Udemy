// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variavel

const Soma = (a, b) => {
  return a + b;
};

console.log(Soma(2, 3));

// Retorno ímplicito

const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));
