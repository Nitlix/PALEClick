
const Log = require("./Log.js");

const NAME = require("./format/NAME.js");
const ALLOWED_KEYS = require("./format/ALLOWED_KEYS.js");
let DEBUG = require("./format/DEBUG.js");

const Sleep = require("./Sleep.js");

const RandomDeviate = require("./RandomDeviate.js");
const RandomBothSidedDeviate = require("./RandomBothSidedDeviate.js");

const RandomChance = require("./RandomChance.js");
const WriteFile = require("./WriteFile.js");
const RandomRoam = require("./RandomRoam.js");

const Click = require("./Click.js");


//Process Watcher
//Can stop the autoclicker when set to false
let ProcessWatcher = true;


function StopAutoclicker(){
    ProcessWatcher = false;
}

async function Autoclicker(key, typeConfig){
    Log.normal(`Triggered ${NAME} from key: ${key} with type: ${typeConfig.type}.`)
    
    if (!ALLOWED_KEYS.includes(key)){
        Log.error(`Key ${key} is not allowed!`)
        return;
    }

    let GroupClick = 0;
    let Clicks = 0;

    let config = typeConfig.config;

    let BaseTime = config.drive.default;

    while (ProcessWatcher){

        //drive rise
        if (RandomChance(config.drive.chance)){
            BaseTime = RandomRoam(BaseTime, config.drive.default, config.drive.roam, config.drive.amount)
            Log.normal(`Roamed to ${BaseTime.toFixed(2)}ms.`)
        }


        let Time = RandomBothSidedDeviate(BaseTime, config.global.range);



        //group click

        if (GroupClick == config.group.clicks){
            GroupClick = 0;
            Time += RandomDeviate(config.group.cooldown.amount, config.group.cooldown.range);
        }
        GroupClick++;


        //overdrive spike
        if (RandomChance(config.overdrive.chances.spike)){
            Time += RandomDeviate(config.overdrive.amounts.spike.amount, config.overdrive.amounts.spike.range);
        }

        //overdrive drop
        if (RandomChance(config.overdrive.chances.drop)){
            Time += RandomDeviate(config.overdrive.amounts.drop.amount, config.overdrive.amounts.drop.range);
        }


        //calculate click delay 
        const Delay = RandomBothSidedDeviate((Time*config.delay.multiplier), (Time*config.delay.range));

        //click

        Clicks++;

        Click(key, Delay)


        if (DEBUG){
            const cps = (1000/Time).toFixed(2)
            Log.debug(`Clicked ${key}, starting delay ${Delay.toFixed(2)} (${cps} CPS).`)
        }

       
        
        // history.push({click: Clicks, delay: parseFloat(Delay.toFixed(3)), cps: parseFloat(cps)})

        await Sleep(Time)
    }

    ProcessWatcher = true;



    // WriteFile("./history.json", history)
}

module.exports = {
    Autoclicker,
    StopAutoclicker
}