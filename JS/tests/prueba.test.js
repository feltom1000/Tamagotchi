const Mascota = require('../mascota')
const Comida = require('../comida')
const Chocolate = require('../chocolate')
const Manzana = require('../manzana')
const PapasFritas = require('../papasFritas')
const Pollo = require('../pollo')
const Pescado = require('../pescado')


describe('La mascota existe', () => {
    let mascota // Variable global
    //beforeAll(()=>{
      //  mascota = new Mascota
       // });

        describe('Cuando la mascota esta muy cansada (energia = 0)', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                mascota.energia = 0
                });
        
                describe('Y quiere ir al baño', () => {
                    it('responde que esta muy cansado', () => {
                        expect(mascota.irAlBanio()).toEqual("Toy taan cansado... No puedo... ni... llegar... al baño")
                    });
                });
            
                describe('Y quiere jugar', () => {
                    it('responde que esta muy cansada para jugar', () => {
                        expect(mascota.jugar()).toEqual("¡Estoy muy cansado para jugar! :(")
                    });
                });
        
                describe('Y quiere tomar su medicina', () => {
                    it('responde que esta muy cansada para tomar su medicina', () => {
                        expect(mascota.tomarMedicina()).toEqual("Toy cansado!!! No quiero tomar mi medicina >.<")
                    });
                });
        });
        
        describe('Mascota intenta tomar la medicina', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                });

                describe('Y al tener mas de 60 de salud', () => {
                    it('devuelve 100', () => {
                        mascota.salud = 65
                        mascota.tomarMedicina()
                        expect(mascota.salud).toEqual(100)
                        expect(mascota.energia).toEqual(90)
                        expect(mascota.felicidad).toEqual(85)
                    });
                });
            
                describe('Y al no tener salud', () => {
                    it('suma 40 de salud', () => {
                        mascota.salud = 0
                        mascota.tomarMedicina()
                        expect(mascota.salud).toEqual(40)
                        expect(mascota.energia).toEqual(90)
                        expect(mascota.felicidad).toEqual(85)
                    });
                });
        });
        
        describe('Mascota intenta ir al baño', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                });

                describe('Y al tener + de 95 de Felicidad', () => {
                    it('devuelve 100', () => {
                        mascota.felicidad = 96
                        mascota.irAlBanio()
                        expect(mascota.felicidad).toEqual(100)
                    });
                });
            
                describe('Y al no tener felicidad', () => {
                    it('suma 5', () => {
                        mascota.felicidad = 0
                        mascota.irAlBanio()
                        expect(mascota.felicidad).toEqual(5)
                    });
                });

                describe('Y al tener menos de 45 de Incontinencia', () => {
                    it('incontinencia devuelve 0', () => {
                        mascota.incontinencia = 30
                        mascota.irAlBanio()
                        expect(mascota.incontinencia).toEqual(0)
                    });
                });

                describe('Y al tener mas de 45 de Incontinencia', () => {
                    it('incontinencia resta 45', () => {
                        mascota.incontinencia = 50
                        mascota.irAlBanio()
                        expect(mascota.incontinencia).toEqual(5)
                    });
                });

                it('Responde correctamente', () => {
                    expect(mascota.irAlBanio()).toEqual("Ufff, ya me siento mejor")
                });
        });

        describe('Mascota intenta jugar', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                });

                describe('Y al tener mas de 75 de felicidad', () => {
                    it('devuelve 100', () => {
                        mascota.felicidad = 80
                        mascota.jugar()
                        expect(mascota.felicidad).toEqual(100)
                    });
                });
            
                describe('Y al tener menos de 75 de felicidad', () => {
                    it('suma 25', () => {
                        mascota.felicidad = 50
                        mascota.jugar()
                        expect(mascota.felicidad).toEqual(75)
                    });
                });

                it('la energia, la suciedad, la incontinencia y el hambre se alteran.', () => {
                    mascota.jugar()
                    expect(mascota.suciedad).toEqual(25) // Suma 25 de Suciedad
                    expect(mascota.incontinencia).toEqual(10) // Suma 10 de incontinencia
                    expect(mascota.energia).toEqual(75) // Baja 25 de Energia
                    expect(mascota.hambre).toEqual(85) // Baja 25 de hambre
                });

                it('Responde correctamente al jugar', () => {
                    mascota.jugar()
                    expect(mascota.jugar()).toEqual("Wiiiiiiiiiiiiiii")
                });
        });

        describe('Mascota come:', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                mascota.energia = 0
                mascota.hambre = 0
                mascota.gordura = 50
                mascota.felicidad = 0
                mascota.salud = 50
                });

                it('Manzana:', () => {
                    const manzana = new Manzana()
                    mascota.comer(manzana)
                    expect(mascota.energia).toEqual(20) // + 20
                    expect(mascota.hambre).toEqual(35) // + 35
                    expect(mascota.gordura).toEqual(40) // - 10
                    expect(mascota.felicidad).toEqual(-5) // - 5
                    expect(mascota.salud).toEqual(72.5) // + 22.5
                });
                
                it('Pollo:', () => {
                    const pollo = new Pollo()
                    mascota.comer(pollo)
                    expect(mascota.energia).toEqual(20) // + 20
                    expect(mascota.hambre).toEqual(35) // + 35
                    expect(mascota.gordura).toEqual(55) // + 5
                    expect(mascota.felicidad).toEqual(10) // + 10
                    expect(mascota.salud).toEqual(65) // + 15
                });
    
                it('PapasFritas:', () => {
                    const papasFritas = new PapasFritas()
                    mascota.comer(papasFritas)
                    expect(mascota.energia).toEqual(5) // + 5
                    expect(mascota.hambre).toEqual(-20) // - 20
                    expect(mascota.gordura).toEqual(100) // + 50
                    expect(mascota.felicidad).toEqual(65) // + 65
                    expect(mascota.salud).toEqual(15) // - 35
                });
    
                it('Chocolate:', () => {
                    const chocolate = new Chocolate()
                    mascota.comer(chocolate)
                    expect(mascota.energia).toEqual(15) // + 15
                    expect(mascota.hambre).toEqual(5) // + 5
                    expect(mascota.gordura).toEqual(90) // + 40
                    expect(mascota.felicidad).toEqual(50) // + 50
                    expect(mascota.salud).toEqual(32.5) // - 17.5
                });

                it('Pescado:', () => {
                    const pescado = new Pescado()
                    mascota.comer(pescado)
                    expect(mascota.energia).toEqual(35) // + 35
                    expect(mascota.hambre).toEqual(25) // + 25
                    expect(mascota.gordura).toEqual(60) // + 10
                    expect(mascota.felicidad).toEqual(-5) // - 5
                    expect(mascota.salud).toEqual(57.5) // + 7.5
                });

                describe('Al comer lo que sea', () => {
                    const manzana = new Manzana()
                    it('se modifica su incontinencia y suciedad, y responde.', () => {
                        expect(mascota.comer(manzana)).toEqual("Hmmmm.... ¡¡Gracias!!")
                        expect(mascota.suciedad).toEqual(10) // + 10
                        expect(mascota.incontinencia).toEqual(30) // + 30
                    });
                });
    
        });

        describe('Mascota intenta dormir', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                });

                describe('Y al tener 100 de energia', () => {
                    it('No puede dormir', () => {
                        mascota.energia = 100
                        expect(mascota.dormir()).toEqual("¡¡¡No tengo Sueño!!!!")
                    });
                });
            
                describe('Y al tener mas de 75 de energia', () => {
                    it('devuelve 100 y responde', () => {
                        mascota.energia = 80
                        expect(mascota.dormir()).toEqual("zzzZZZzzz")
                        expect(mascota.energia).toEqual(100)
                    });
                });

                describe('Y al tener menos de 75 de energia', () => {
                    it('suma 25 y responde', () => {
                        mascota.energia = 50
                        expect(mascota.dormir()).toEqual("zzzzzzzzZZZZZZZZZzzzzzzzz")
                        expect(mascota.energia).toEqual(75)
                    });
                });
        });

        describe('Mascota intenta bañarse', () => {
            beforeEach(()=>{
                mascota = new Mascota()
                });

                describe('Y al no tener suciedad', () => {
                    it('no se quiere bañar', () => {
                        mascota.suciedad = 0
                        expect(mascota.baniarse()).toEqual("¡¡Pero no estoy sucio!!")
                    });
                });

                describe('Y al tener menos de 25 de suciedad', () => {
                    it('devuelve 0 y responde', () => {
                        mascota.suciedad = 20
                        expect(mascota.baniarse()).toEqual("Fresco como una lechuga")
                        expect(mascota.suciedad).toEqual(0)
                    });
                });

                describe('Al tener mas de 25 de suciedad', () => {
                    it('se resta 25 y responde', () => {
                        mascota.suciedad = 50
                        expect(mascota.baniarse()).toEqual("Ahora si que brillo de limpito =)")
                        expect(mascota.suciedad).toEqual(25)
                    });
                });
        });
});