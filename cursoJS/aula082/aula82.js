class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar (){
        if(this.ligado){
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar (){
        console.log('Voce alterou o metodo ligar')
    }

    falaOi(){
        console.log('Oi');
    }
}


const s1 = new Smartphone('Sansung', 'preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1.ligado);
t1.falaOi();
// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// console.log(d1);
// d1.desligar();
// d1.desligar();