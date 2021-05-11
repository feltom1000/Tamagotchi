const Mascota = require('../mascota')

it('mascota con la energia a full, trata de dormir y no puede', () => {
    const mascota = new Mascota()
    expect(mascota.dormir()).toEqual("¡¡¡No tengo Sueño!!!!")
    expect(mascota.energia).toEqual(100)
    
});

it('macota sin energia trata de tomar su medicina y no puede', () => {
    const mascota1 = new Mascota()
    mascota1.jugar() //Energia en 75
    mascota1.jugar() //Energia en 50
    mascota1.jugar() //Energia en 25
    mascota1.jugar()//Energia en 0
    expect(mascota1.tomarMedicina()).toEqual("Toy cansado!!! No quiero tomar mi medicina >.<")
    expect(mascota1.suciedad).toEqual(100)
    expect(mascota1.incontinencia).toEqual(40)
    
});