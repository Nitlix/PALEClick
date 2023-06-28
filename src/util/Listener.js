const StartAutoclicker = require("./StartAutoclicker");

let ListeningKey = null;

//Clicking state
//Autoclicker thread instance
let Clicking = false;
let Instance = null;


let detectedKey = null;


function setListeningKey(key){
    ListeningKey = key;
    return ListeningKey;
}

function Listener(config){
    process.stdin.on('keypress', (str, key) => {
        if (key.name == ListeningKey){
            if (Clicking){
                clearTimeout(Instance);
            }
            else {
                Instance = StartAutoclicker(config);
            }

            Clicking = !Clicking;
        }
    });
}