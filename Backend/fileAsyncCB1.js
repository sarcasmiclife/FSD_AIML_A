const fs = require("fs")
function myReadFile() {
    try {
        fs.readFile("dummy.txt", "utf-8", (err, data) => {
            if(err) throw err;
            console.log("File Data: ", data);
        });
    }
    catch(err) {
        comsole.log("File Reading Error: ", err.message)
    }
}
myReadFile()