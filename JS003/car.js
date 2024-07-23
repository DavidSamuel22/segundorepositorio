class Car {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.velocidade = 0; // Velocidade começou com 0
    }
  
    acelerar() {
      this.velocidade += 10; // += Está adicionando +10 na velocidade
      return `Velocidade: ${this.velocidade} km/h`;
    }
  
    frear() {
      this.velocidade -= 5; //Está subtraindo 5 da velocidade
      if (this.velocidade < 0) this.velocidade = 0;
      return `Velocidade: ${this.velocidade} km/h`;
    }
  }
  
  const meuCarro = new Car('Honda', 'Civic', 2021);
  console.log(meuCarro.acelerar()); // Velocidade: 10 km/h
  console.log(meuCarro.frear()); // Velocidade: 5 km/h
  