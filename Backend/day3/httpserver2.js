const http = require("http");
const server = http.createServer(async(req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const data = await fetch("https://api.github.com/search/users?q=location:ghaziabad")
    const datajson = await data.json();
    const newdata = datajson.items;
    const logins = newdata.map((i) => {
        return i.login;
    })
    res.write(JSON.stringify(logins));
    res.end();
})

server.listen(3001, (err) => {
    try {
        if (err) throw err;
        console.log("Server is running on Port 3001");
    }
    catch(err) {
        console.log("Server Error: ", err.message)
    }
})