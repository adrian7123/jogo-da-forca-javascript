class Pessoa {
  idade;
  nome;
  peso;
  altura;

  constructor(nome, idade, peso, altura) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
  }

  perfil() {
    return {
      nome: this.nome,
      idade: this.idade,
      imc: this.calcularImc(),
      ["Ano de nascimento"]: this.birthYear(),
    };
  }

  hello() {
    return "Olá " + this.nome;
  }

  birthYear() {
    let d = new Date();

    d.setFullYear(d.getFullYear() - this.idade);

    return d.getFullYear();
  }

  calcularImc() {
    return this.peso / (this.altura * this.altura);
  }

  category() {
    const imc = this.calcularImc();

    if (imc < 18.5) return "Baixo do peso";

    if (imc < 24.9) return "Peso normal";

    if (imc < 29.9) return "Acima do peso";

    return "Obeso";
  }
}

let pessoa1 = new Pessoa("Brayan", 16, 75, 1.75);
let pessoa2 = new Pessoa("Adrian", 23, 105, 1.73);

console.log(pessoa1.perfil());
console.log(pessoa2.perfil());
