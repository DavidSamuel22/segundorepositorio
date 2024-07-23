class Car {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirInfo() {
      return `Carro: ${this.marca} ${this.modelo} (${this.ano})`;
    }
  }
  
  const meuCarro = new Car('Toyota', 'Corolla', 2020);
  console.log(meuCarro.exibirInfo()); // Carro: Toyota Corolla (2020)
  