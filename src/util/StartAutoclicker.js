const Autoclicker = require("./Autoclicker");
const CLICKS = require("./format/CLICKS");

function StartAutoclicker(config){
    return setTimeout(()=>{
        Autoclicker(
            config.click, 
            {
                type: config.selected,
                config: config.types[config.selected]
            },
            CLICKS
        )
    },0)
}

module.exports = StartAutoclicker;