const keypress = require('keypress');
const { strCopy } = require("./Copy");
let lastKey = null;




keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('keypress', (str, key) => {
    if (key.name == lastKey){
        return;
    }
    lastKey = key.name;
})




async function KeySetter(){
    let currentKey = strCopy(lastKey)
    setInterval(()=>{
        if (currentKey != lastKey){
            return lastKey;
        }
    },50)
}

module.exports = KeySetter;