const Mascota = require('../mascota')

it('mascota con la energia a full, trata de dormir y no puede', () => {
    const mascota = new Mascota()
    expect(mascota.dormir()).toEqual("¡¡¡No tengo Sueño!!!!")
    expect(mascota.energia).toEqual(100)
    
});