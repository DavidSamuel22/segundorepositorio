class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    
    cumprimentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`); 
    }
}

const pessoa2 = new Pessoa('Carlos', 25, 'Professor');

pessoa2.cumprimentar();
