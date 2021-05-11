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
    const mascota = new Mascota()
    mascota.jugar() //Energia en 75 / Suciedad en 25 / Incontinencia en 10
    mascota.jugar() //Energia en 50 / Suciedad en 50 / Incontinencia en 20
    mascota.jugar() //Energia en 25 / Suciedad en 75 / Incontinencia en 30
    mascota.jugar()//Energia en 0 / Suciedad en 100 / Incontinencia en 40
    expect(mascota.tomarMedicina()).toEqual("Toy cansado!!! No quiero tomar mi medicina >.<")
    expect(mascota.salud).toEqual(100)
    expect(mascota.suciedad).toEqual(100)
    expect(mascota.incontinencia).toEqual(40)
    
});

it('mascota con mas de 60 de salud, devuelve 100 de salud al tomar medicina', () => {
    const papasFritas = new PapasFritas
    const mascota = new Mascota()
    mascota.comer(papasFritas) //Salud en 65 / Suciedad en 10 / Incontinencia en 30
    expect(mascota.suciedad).toEqual(10)
    expect(mascota.incontinencia).toEqual(30)
    expect(mascota.salud).toEqual(65)
    mascota.tomarMedicina() // Salud 100 / Energia 90
    expect(mascota.salud).toEqual(100)
    expect(mascota.energia).toEqual(90)
    
});

it('mascota con poca salud, toma medicina y suma 40', () => {
    const papasFritas = new PapasFritas
    const mascota = new Mascota()
    mascota.comer(papasFritas) //Salud en 65 / Suciedad en 10 / Incontinencia en 30
    mascota.comer(papasFritas) //Salud 30 / Suciedad en 20 / Incontinencia en 60
    expect(mascota.suciedad).toEqual(20)
    expect(mascota.incontinencia).toEqual(60)
    expect(mascota.salud).toEqual(30)
    mascota.tomarMedicina() // Salud 100 / Energia 90
    expect(mascota.salud).toEqual(70)
    expect(mascota.energia).toEqual(90)
    
});

it('mascota esta muy cansada para ir al baño', () => {
    const mascota = new Mascota()
    mascota.jugar() //Energia en 75 / Suciedad en 25 / Incontinencia en 10
    mascota.jugar() //Energia en 50 / Suciedad en 50 / Incontinencia en 20
    mascota.jugar() //Energia en 25 / Suciedad en 75 / Incontinencia en 30
    mascota.jugar()//Energia en 0 / Suciedad en 100 / Incontinencia en 40
    expect(mascota.irAlBanio()).toEqual("Toy taan cansado... No puedo... ni... llegar... al baño")
});

it('mascota va al banio y se modifican los atributos correctamente y responde correctamente', () => {
    const mascota = new Mascota()
    mascota.jugar() //Energia en 75 / Suciedad en 25 / Incontinencia en 10
    mascota.jugar() //Energia en 50 / Suciedad en 50 / Incontinencia en 20
    mascota.jugar() //Energia en 25 / Suciedad en 75 / Incontinencia en 30
    expect(mascota.irAlBanio()).toEqual("Ufff, ya me siento mejor") // Energia 20
    expect(mascota.felicidad).toEqual(100)
    expect(mascota.incontinencia).toEqual(0)
    expect(mascota.energia).toEqual(20)
});

it('mascota sin energia esta muy cansada para jugar', () => {
    const mascota = new Mascota()
    mascota.jugar() //Energia en 75 / Suciedad en 25 / Incontinencia en 10
    mascota.jugar() //Energia en 50 / Suciedad en 50 / Incontinencia en 20
    mascota.jugar() //Energia en 25 / Suciedad en 75 / Incontinencia en 30
    mascota.jugar()//Energia en 0 / Suciedad en 100 / Incontinencia en 40
    expect(mascota.jugar()).toEqual("¡Estoy muy cansado para jugar! :(")
});
