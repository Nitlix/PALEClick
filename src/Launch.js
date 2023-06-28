// import express from 'express';

const ReadConfig = require("./util/ReadConfig")
const Autoclicker = require('./util/Autoclicker')


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

    Autoclicker(
        config.click, 
        {
            type: config.selected,
            config: config.types[config.selected]
        },
        1000
    )
}

main()