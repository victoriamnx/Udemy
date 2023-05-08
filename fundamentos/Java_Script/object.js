const prod1 = {}; // null object - objet vazio
prod1.nome = "Celular Última Geração";
prod1.preco = "4.599,99";
prod1["Desconto legal"] = 0.4; // Evitar atributos com espaço

console.log(prod1);
console.log("Celular: " + prod1.nome, "Preço: " + prod1.preco);

const prod2 = {
  nome: "Camisa Polo",
  preco: "79,90",
};

// JSON String | JSON é um formato textual e não um objeto 

('{ "nome": "Camisa Polo Preta", "Preço": 79,90}');

console.log(prod2);
