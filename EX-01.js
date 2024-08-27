class Produto {

    constructor (nome, preco) {
    this.nome = nome;
    this.preco = preco;
    }
    }
    
    class Eletronico extends Produto {
    
    constructor (nome, preco, garantia) {
        super(nome,preco)
        this.garantia = garantia;
    }
    }

