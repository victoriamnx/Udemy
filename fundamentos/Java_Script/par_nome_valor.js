// Par Nome/Valor
const saudacao = "Opa"; // Contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; // Contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: "Pedro",
  idade: "32",
  endereço: {
    logradouro: "cidade 2000",
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
