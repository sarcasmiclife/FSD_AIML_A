const express = require("express")
const app = express()
const port = 3002
const user = []

const m1 = (req, res, next) => {
    const age = req.query.age;
    if (!age) {
        res.status(400).send("enter age in query")
    }
    else {
        if (age < 18) {
            res.status(400).send("user not authourised")
        }
        else {
            next();
        }
    }
}

//app.use(m1)
app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200).json(user)
})

app.get("user/:id", (req, res) => {
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid)
    if (index == -1) {
        res.status(400).json({
            status: "fail",
            message: "user not found"
        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "user found",
            data: users[index]
        })
    }
})

app.post("/createuser", (req, res) => {
    const {name, email} = req.body
    const newId = Date.now();
    const newUser = {
        id: newId, name, email
    }
    user.push(newUser)
    res.status(201).json({
        status: "success",
        message: "user created successfully",
        data: newUser
    })
})

app.patch("/edituser/:id", (req, res) => {
    const uid = req.params.id
    const {name, email} = req.body
    if (!name || !email) {
        res.status(400).json({
            status: "fail",
            message: "all fields required"
        })
    }
    else {
        const index = user.findIndex(ind => ind.id == uid)
        if (index == -1) {
            res.status(400).json({
                status: "fail",
                message: "user not found"
            })
        }
        else {
            user[index].name = name
            user[index].email = email
            res.status(200).json({
                status: "success",
                message: "user found",
                data: users[index]
            })
        }
    }
})

app.delete("/deleteuser/:id", (req, res) => {
    const uid = req.params.id;
    const index = user.findIndex(ind => ind.id == uid)
    if (index == -1) {
        res.status(400).json({
            status: "fail",
            message: "user not found"
        })
    }
    else {
        const deldata = users.slpice(index, 1)
        res.status(200).json({
            status: "success",
            message: "user deleted",
            data: deldata
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})