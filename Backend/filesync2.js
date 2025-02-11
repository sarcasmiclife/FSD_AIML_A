const {myReadFile, myWriteFile, username} = require("./filesync1");
myReadFile();
const data = "erwuyis"
myWriteFile(data);
myReadFile();
console.log("username: ", username);