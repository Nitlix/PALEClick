const { strCopy } = require("./Copy");

let lastKey = null;

process.stdin.on('keypress', (str, key) => {
    if (key.name == lastKey){
        return;
    }
    lastKey = key.name;
})

async function KeySetter(){
    let currentKey = strCopy(lastKey)
    let waiting = setInterval(()=>{
        
    },50)
}