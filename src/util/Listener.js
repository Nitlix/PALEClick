const keypress = require('keypress');

const StartAutoclicker = require("./StartAutoclicker");

let ListeningKey = null;

//Clicking state
//Autoclicker thread instance
let Clicking = false;
let Instance = null;


let detectedKey = null;

//key listener
const { StrCopy } = require("./Copy");
const Log = require('./Log');
const { StopAutoclicker } = require('./Autoclicker');
let LastKey = null;





function setListeningKey(key) {
    ListeningKey = key;
    return ListeningKey;
}

function Listener(config) {

    Log.normal(`Started the main Listener thread instance, press [DEL] to exit at any point.`)

    keypress(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();

    process.stdin.on('keypress', function (ch, key) {
        if (key.name == 'delete') {
            process.exit();
        }

        if (key.name == ListeningKey){
            if (Clicking){
                Log.debug(`Shutting down the autoclicker instance...`)
                StopAutoclicker();
            }
            else {
                Log.debug(`Detected key (${key.name}) - Starting the autoclicker instance...`)
                StartAutoclicker(config);
            }
        
            Clicking = !Clicking;
        }

        LastKey = key.name;
            
    });

}

module.exports = {
    Listener,
    setListeningKey
}