const fs = require("fs");

const CONFIG = require("./format/config");
const CONFIGLOCATION = require("./format/configlocation");


const CreateConfig = {
    create: async () => {
        await fs.writeFileSync(CONFIGLOCATION, JSON.stringify(CONFIG))
        return
    },
    version: CONFIG.metadata
}

module.exports = CreateConfig;