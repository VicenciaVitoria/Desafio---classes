class heroi{
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        console.log ("O " + tipo + " atacou usando " + ataque)
    }
}

if (tipo === "mago"){
    ataque === "magia"
}else if (tipo === "guerreiro"){
    ataque === "espada"
}else if (tipo === "monge"){
    ataque === "artes marciais"
}else if (tipo === "ninja"){
    ataque === "shuriken"
}

let hero = new heroi ("Vlad", "21", "ninja")

hero.atacar ()