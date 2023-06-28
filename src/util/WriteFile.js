const fs = require('fs');

function WriteFile(file, json){
    fs.writeFileSync(file, JSON.stringify(json, null, 4));
}

module.exports = WriteFile;