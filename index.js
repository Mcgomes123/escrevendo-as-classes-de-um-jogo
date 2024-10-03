class Herói {
    constructor(nome, idade, classe) {
      this.nome = nome;
      this.idade = idade;
      this.classe = classe;
    }
  
    ataque() {
      if (this.classe == 'Mago') {
        console.log(`O ${this.classe} atacou usando Magia`);
      } else if (this.classe == 'Guerreiro') {
        console.log(`O ${this.classe} atacou usando sua Espada`);
      } else if (this.classe == 'Monge') {
        console.log(`O ${this.classe} atacou usando Artes Marciais`);
      } else if (this.classe == 'Ninja') {
        console.log(`O ${this.classe } atacou usando Shuriken`);
      }
    }
  }
  
  const herói1 = new Herói("Wanderson", 1234, "Monge" );
  herói1.ataque()