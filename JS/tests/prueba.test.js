const Mascota = require('../mascota')
const Comida = require('../comida')
const Chocolate = require('../chocolate')
const Manzana = require('../manzana')
const PapasFritas = require('../papasFritas')
const Pollo = require('../pollo')
const Pescado = require('../pescado')


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
    mascota.tomarMedicina() // Salud 100 / Energia 90 / Felicidad 85
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
    mascota.tomarMedicina() // Salud 100 / Energia 90 / Felicidad 85
    expect(mascota.felicidad).toEqual(85)
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
    expect(mascota.felicidad).toEqual(100)
});

it('mascota juega y se le incrementa la felicidad, la suciedad y la incontinencia. Baja la energia', () => {
    const mascota = new Mascota()
    mascota.tomarMedicina() // Felicidad 85 / Energia 90
    mascota.tomarMedicina() // Felicidad 70 / Energia 80
    expect(mascota.jugar()).toEqual("Wiiiiiiiiiiiiiii") // Felicidad 95 / Suciedad 25 / Incontinencia 10 / Energia 55 / Hambre 85
    expect(mascota.felicidad).toEqual(95)
    expect(mascota.suciedad).toEqual(25)
    expect(mascota.incontinencia).toEqual(10)
    expect(mascota.energia).toEqual(55)
    expect(mascota.hambre).toEqual(85)
});

it('mascota come manzana y todos los atributos de modifican correctamente', () => {
    const mascota = new Mascota()
    const manzana = new Manzana()
    mascota.felicidad = 0
    mascota.hambre = 0
    mascota.salud = 0
    mascota.gordura = 100
    mascota.energia = 0
    expect(mascota.comer(manzana)).toEqual("Hmmmm.... ¡¡Gracias!!") //Energia 20 / Hambre 35 / gordura 90 / Felicidad -5 / Salud 22.5
    expect(mascota.energia).toEqual(20)
    expect(mascota.hambre).toEqual(35)
    expect(mascota.gordura).toEqual(90)
    expect(mascota.felicidad).toEqual(-5)
    expect(mascota.salud).toEqual(22.5)
});

it('mascota come pollo y todos los atributos de modifican correctamente', () => {
    const mascota = new Mascota()
    const pollo = new Pollo()
    mascota.felicidad = 0
    mascota.hambre = 0
    mascota.salud = 0
    mascota.gordura = 0
    mascota.energia = 0
    expect(mascota.comer(pollo)).toEqual("Hmmmm.... ¡¡Gracias!!") //Energia 20 / Hambre 35 / gordura 5 / Felicidad 10 / salud 15
    expect(mascota.energia).toEqual(20)
    expect(mascota.hambre).toEqual(35)
    expect(mascota.gordura).toEqual(5)
    expect(mascota.felicidad).toEqual(10)
    expect(mascota.salud).toEqual(15)
});

it('mascota come papasFritas y todos los atributos de modifican correctamente', () => {
    const mascota = new Mascota()
    const papasFritas = new PapasFritas()
    mascota.felicidad = 0
    mascota.hambre = 0
    mascota.salud = 100
    mascota.gordura = 0
    mascota.energia = 0
    expect(mascota.comer(papasFritas)).toEqual("Hmmmm.... ¡¡Gracias!!") //Energia 5 / Hambre -20 / gordura 50 / Felicidad 65 / salud 65
    expect(mascota.energia).toEqual(5)
    expect(mascota.hambre).toEqual(-20)
    expect(mascota.gordura).toEqual(50)
    expect(mascota.felicidad).toEqual(65)
    expect(mascota.salud).toEqual(65)
});

it('mascota come chocolate y todos los atributos de modifican correctamente', () => {
    const mascota = new Mascota()
    const chocolate = new Chocolate()
    mascota.felicidad = 0
    mascota.hambre = 0
    mascota.salud = 100
    mascota.gordura = 0
    mascota.energia = 0
    expect(mascota.comer(chocolate)).toEqual("Hmmmm.... ¡¡Gracias!!") //Energia 15 / Hambre 5 / gordura 40 / Felicidad 50 / salud 82.5
    expect(mascota.energia).toEqual(15)
    expect(mascota.hambre).toEqual(5)
    expect(mascota.gordura).toEqual(40)
    expect(mascota.felicidad).toEqual(50)
    expect(mascota.salud).toEqual(82.5)
});

it('mascota come pescado y todos los atributos de modifican correctamente. Incluido incontinencia y suciedad', () => {
    const mascota = new Mascota()
    const pescado = new Pescado()
    mascota.felicidad = 0
    mascota.hambre = 0
    mascota.salud = 0
    mascota.gordura = 0
    mascota.energia = 0
    expect(mascota.comer(pescado)).toEqual("Hmmmm.... ¡¡Gracias!!") //Energia 35 / Hambre 25 / gordura 10 / Felicidad -5 / salud 7.5
    expect(mascota.energia).toEqual(35)
    expect(mascota.hambre).toEqual(25)
    expect(mascota.gordura).toEqual(10)
    expect(mascota.felicidad).toEqual(-5)
    expect(mascota.salud).toEqual(7.5)
    expect(mascota.incontinencia).toEqual(30)
    expect(mascota.suciedad).toEqual(10)
});

it('mascota con la energia a full, trata de dormir y no puede', () => {
    const mascota = new Mascota()
    expect(mascota.dormir()).toEqual("¡¡¡No tengo Sueño!!!!")
    expect(mascota.energia).toEqual(100)
    
});

it('mascota con mas energia de 75, al dormir, devuelve 100', () => {
    const mascota = new Mascota()
    mascota.energia = 80
    expect(mascota.dormir()).toEqual("zzzZZZzzz")
    expect(mascota.energia).toEqual(100)
    
});

it('mascota al dormir aumenta aumenta 25 de energia', () => {
    const mascota = new Mascota()
    mascota.energia = 50
    expect(mascota.dormir()).toEqual("zzzzzzzzZZZZZZZZZzzzzzzzz")
    expect(mascota.energia).toEqual(75)
});

it('mascota al no estar sucio, no se quiere baniar', () => {
    const mascota = new Mascota()
    //mascota.suciedad = 50
    expect(mascota.baniarse()).toEqual("¡¡Pero no estoy sucio!!")
});

it('mascota con menos de 25 de suciedad, devuelve 0 al bañarse', () => {
    const mascota = new Mascota()
    mascota.suciedad = 20
    expect(mascota.baniarse()).toEqual("Fresco como una lechuga")
    expect(mascota.suciedad).toEqual(0)
});

it('mascota se baña y todo se modifica correctamente', () => {
    const mascota = new Mascota()
    mascota.suciedad = 50
    expect(mascota.baniarse()).toEqual("Ahora si que brillo de limpito =)")
    expect(mascota.suciedad).toEqual(25)
});


