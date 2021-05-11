const Comida = require('../JS/comida')

class Chocolate extends Comida{
    constructor(){
        super(15, 5, 40, 50);
    }

}

module.exports = Chocolate