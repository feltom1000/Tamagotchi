const Comida = require('./comida')

class Pescado extends Comida{
    constructor(){
        super(35, 25, 10, -5);
    }

}

module.exports = Pescado
