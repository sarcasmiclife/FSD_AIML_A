const fs = require("fs/promises")
function myReadFile() {
    try {
        const res = fs.readFile("dummy.txt", "utf-8")
        res.then((data) => {
            console.log("File Data: ", data)
        })
        .catch((err) => {
            throw err
        })
    }
    catch(err) {
        comsole.log("File Reading Error: ", err.message);
    }
}
const myWriteFile = async(data) => {
    try {
        await fs.writeFile("dummy.txt", data);
        console.log("Success");
    }
    catch(err) {
        console.log("File Writing Error: ", err.message);
    }
}
myReadFile();
myWriteFile("new data uploaded");
myReadFile();