const express = require('express')

const ReadConfig = require("./util/ReadConfig")
const Autoclicker = require('./util/Autoclicker')
const Sleep = require("./util/Sleep")
const { Listener, setListeningKey } = require("./util/Listener")


const app = express();
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('x-powered-by', 'Nitlix-AC JS Systems V5-X34-A130');
//   res.append('x-authority', 'A Private Nitlix Application.');
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });





async function main() {
    const config = await ReadConfig()

    setListeningKey(config.trigger)
    Listener(config)
}

main()