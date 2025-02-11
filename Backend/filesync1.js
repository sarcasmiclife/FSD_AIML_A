const  fs = require("node:fs")

function myReadFile() {
    try {
        const data = fs.readFileSync("dummy.txt")
        if (data) {
            console.log("file data", data.toString())
        }
        else{
            throw err
        }
        
    }
    catch(err) {
        console.log("file error", err.message)
    }
}

function myWriteFile(data) {
    try {
        fs.writeFileSync("dummy.txt", data);
    }
    catch(err) {
        console.log("file writing error", err.message);
    }
}

module.exports = {myReadFile:myReadFile, myWriteFile:myWriteFile, username:"hsdhd"}