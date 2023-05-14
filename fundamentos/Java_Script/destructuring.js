// Novo recurso do ES2025

const pessoa = {
  nome: "Ana",
  idade: 5,
  endereço: {
    logradouro: "Cidade 2000",
    numero: 123,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

const {
  endereço: { logradouro, numero, cep },
} = pessoa;

const { conta: {ag, num} } = pessoa;
console.log(ag, num);
