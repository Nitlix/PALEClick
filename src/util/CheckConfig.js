const fs = require("fs")
const CreateConfig = require('./CreateConfig')
const Log = require('./Log')

const CONFIGLOCATION = require("./format/configlocation")

async function CheckConfig(){
    if(!(await fs.existsSync(CONFIGLOCATION))){
        Log.feature(`Config file not found, creating one now using version ${CreateConfig.version}`)
        CreateConfig.create()
        Log.feature(`Config file created, resuming...`)
    }
}



module.exports = CheckConfig;