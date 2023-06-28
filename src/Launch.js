// import express from 'express';

const ReadConfig = require("./util/ReadConfig")
const Autoclicker = require('./util/Autoclicker')
const Sleep = require("./util/Sleep")


// const app = express();
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('x-powered-by', 'Nitlix-AC JS Systems V5-X34-A130');
//   res.append('x-authority', 'A Private Nitlix Application.');
//   next();
// });

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const server = app.listen(3000, () => {
//   console.log('Example app listening on port 3000!');
//   open('http://localhost:3000');
// });



async function main() {
    const config = await ReadConfig()
    await Sleep(5000)
    
}

main()