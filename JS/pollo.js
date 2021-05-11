const Comida = require('../JS/comida')

class Pollo extends Comida{
    constructor(){
        super(20, 35, 5, 15)
    }

}

module.exports = Pollo