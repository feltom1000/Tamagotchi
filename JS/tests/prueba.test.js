const Mascota = require('../mascota')
const Comida = require('../comida')
const Chocolate = require('../chocolate')
const Manzana = require('../manzana')
const PapasFritas = require('../papasFritas')
const Pollo = require('../pollo')
const Pescado = require('../pescado')

it('mascota con la energia a full, trata de dormir y no puede', () => {
    const mascota = new Mascota()
    expect(mascota.dormir()).toEqual("¡¡¡No tengo Sueño!!!!")
    expect(mascota.energia).toEqual(100)
    
});

it('mascota sin energia trata de tomar su medicina y no puede', () => {
    const mascota1 = new Mascota()
    mascota1.jugar() //Energia en 75 / Suciedad en 25 / Incontinencia en 10
    mascota1.jugar() //Energia en 50 / Suciedad en 50 / Incontinencia en 20
    mascota1.jugar() //Energia en 25 / Suciedad en 75 / Incontinencia en 30
    mascota1.jugar()//Energia en 0 / Suciedad en 100 / Incontinencia en 40
    expect(mascota1.tomarMedicina()).toEqual("Toy cansado!!! No quiero tomar mi medicina >.<")
    expect(mascota1.salud).toEqual(100)
    expect(mascota1.suciedad).toEqual(100)
    expect(mascota1.incontinencia).toEqual(40)
    
});

it('mascota con mas de 60 de salud, devuelve 100 de salud', () => {
    const papasFritas = new PapasFritas
    const mascota2 = new Mascota()
    mascota2.comer(papasFritas) //Salud en 65 / Suciedad en 10 / Incontinencia en 30
    expect(mascota2.suciedad).toEqual(10)
    expect(mascota2.incontinencia).toEqual(30)
    expect(mascota2.salud).toEqual(65)
    mascota2.tomarMedicina() // Salud 100 / Energia 90
    expect(mascota2.salud).toEqual(100)
    expect(mascota2.energia).toEqual(90)
    
});