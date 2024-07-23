class car {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirinfo() {
        return 'carro: ${this.marca} ${this.modelo} (${this.ano})';
    }
}
class eletriccar extends car {
    constructor(marca, modelo, ano, bateria) {
        super(marca, modelo, ano);
        this.bateria = bateria;
    }
    exibirbateria() {
        return 'nivel da bateria: ${this.bateria%';
    } 
}
const meucarroeletrico = new eletriccar('tesla', 'model s',2022,100);
console.log(meucarroeletrico.exibirinfo());
console.log(meucarroeletrico.exibirbateria());