const fs = require('fs');
const CheckConfig = require('./CheckConfig');
const Log = require('./Log');
const CONFIGLOCATION = require('./format/configlocation');

async function ReadConfig(){
    Log.normal(`Reading config file...`)
    await CheckConfig()
    return JSON.parse(await fs.readFileSync(CONFIGLOCATION))
}

module.exports = ReadConfig;