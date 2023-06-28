const NAME = require("./format/NAME")

const colours = {
    aqua: '\x1b[36m',
    reset: '\x1b[0m',
    lime: '\x1b[92m',
}

const styles = {
    bold: '\x1b[1m'
}
const Log = {
    feature: (msg) => {
        console.log(`${colours.aqua}${styles.bold}[${NAME}] ${colours.reset} ${msg}`)
    },
    normal: (msg) => {
        console.log(`${colours.lime}${styles.bold}[${NAME}] ${colours.reset} ${msg}`)
    },
    debug: (msg) => {
        console.log(`${colours.aqua}${styles.bold}[${NAME} DEBUG] ${colours.reset} ${msg}`)
    }
}



module.exports = Log;