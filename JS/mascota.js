class Mascota {
    constructor(name, user){
        this.user = user
        this.name = name
        this.felicidad = 100
        this.salud = 100
        this.hambre = 100
        this.energia = 100
        this.gordura = 0
        this.incontinencia = 0
        this.suciedad = 0
    }

    printDataPet(){
        console.log(this.user.id)
        console.log(this.user.name)
        console.log(this.name)
        console.log(this.felicidad)
    }
    
    tomarMedicina(){
        if (this.energia < 10) throw "Toy cansado!!! No quiero tomar mi medicina >.<"
        this.energia -= 10;
        if (this.salud > 60) {
            return this.salud = 100;
        } else {
            return this.salud += 40
        }
    }
    
    irAlBanio(){
        if (this.energia < 5) throw "Toy taan cansado... No puedo... ni... llegar... al baño"
        if (this.felicidad > 95){
            this.felicidad = 100
        } else {
            this.felicidad += 5
        }
        this.energia -= 5;
        if (this.incontinencia < 45){
            return this.incontinencia = 0;
        } else {
            return this.incontinencia -= 45;
        }
    }
    
    jugar(){
        if (this.energia < 25){
            return "¡Estoy muy cansado para jugar! :("
        } else {
            if (this.felicidad > 75){
                this.felicidad = 100
            } else {
                this.felicidad += 25
            }
            this.energia -= 25
            this.suciedad += 25
            this.incontinencia += 10
            return "Wiiiiiiiiiiiiiii"
        }
    }

    modificarEnergiaPorComer(valorComida){
        if ((this.energia + valorComida) > 100){
            this.energia = 100
        } else {
            this.energia += valorComida
        }
    }
    modificarGorduraPorComer(valorComida){
        if ((this.gordura + valorComida) > 100){
            this.gordura = 100
        } else {
            this.gordura += valorComida
        }
    }
    modificarFelicidadPorComer(valorComida){
        if ((this.felicidad + valorComida) > 100){
            this.felicidad = 100
        } else {
            this.felicidad += valorComida
        }
    }
    modificarHambrePorComer(valorComida){
        if ((this.hambre + valorComida) > 100){
            this.hambre = 100
        } else {
            this.hambre += valorComida
        }
    }

    comer(comida){
       this.modificarEnergiaPorComer(comida.valorEnergetico);
       this.modificarGorduraPorComer(comida.valorGraso);
       this.modificarFelicidadPorComer(comida.valorFelicidad);
       this.modificarHambrePorComer(comida.valorNutritivo);
        if (this.salud - ((comida.valorGraso - comida.valorNutritivo) / 2) > 100){
           this.salud = 100
        } else {
           this.salud -= ((comida.valorGraso - comida.valorNutritivo) / 2);
        }
        this.incontinencia += 30;
        this.suciedad += 10;
        return "Hmmmm.... ¡¡Que Rico!!"
    }

    dormir(){
        if (this.energia = 100){
            return "¡¡¡No tengo Sueño!!!!"
        } else if (this.senergia > 75){
            this.energia = 100;
        } else {
            this.energia += 25;
            return "zzzzzzzzZZZZZZZZZzzzzzzzz"
        }
    }

    baniarse(){
        if (this.suciedad = 0){
            return "¡¡Pero no estoy sucio!!"
        } else if (this.suciedad < 25){
            this.suciedad = 0;
        } else {
            this.suciedad -= 25;
        }
    }
}