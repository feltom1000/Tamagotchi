const Comida = require('../JS/comida')

class Manzana extends Comida{
    constructor(){
        super(20, 35, -10, -5);
    }

}

module.exports = Manzana