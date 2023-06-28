const {Autoclicker} = require("./Autoclicker");

function StartAutoclicker(config){
    Autoclicker(
        config.click, 
        {
            type: config.selected,
            config: config.types[config.selected]
        }
    )
}

module.exports = StartAutoclicker;