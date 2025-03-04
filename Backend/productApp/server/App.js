const express = require("express");
const port = 3001;
const App = express();
const products = [{
    id: 1001,
    title: "laptop",
    price: 49999,
    quantity: 5
},
{
    id: 1002,
    title: "tv",
    price: 29999,
    quantity: 6
}];


App.use(express.json())
App.get("/products", (req, res) => {
    res.status(200);
    res.json(products);
})
App.get("/product/:id", (req, res) => {
    const pid = req.params.id;
    const index = products.findIndex(ind => ind.id == pid)
    if (index == -1) {
        res.status(400).json({
            status: "fail",
            message: "product id not found"
        })
    }
    else {
        res.status(200).json({
            status: "success",
            message: "product id found",
            products
        })
    }
})

App.delete("/deleteproduct/:id", (req, res) => {
    const ID = req.params.id;
    const idx = products.findIndex(ind => ind.id = ID);
    if (idx == -1) {
        res.status(400).json({
            status: "fail",
            message: "product not found"
        })
    }
    else {
        const deletedData = products.splice(idx, 1);
        res.status(400).json({
            status: "success",
            message: "product deleted",
            data: deletedData
        })
    }
})

App.post("/product", (req, res) => {
    const {title, price, quantity} = req.body;

    if (!title || !price || !quantity) {
        res.status(400).json({
            status: "fail",
            message: "all fields required"
        })
    }

    else {
    const newID =  products.length > 0 ? products[products.length-1].id+1 : 1001;
    const newProduct =  {
        id: newID, title, price, quantity
    };
    products.push(newProduct);
    res.status(201).json({
        status: "success",
        message: "product created successfully",
        newProduct
    })
    }
})

App.listen(port, (err) => {
    try {
        if (err) throw err;
        else console.log(`server is running on port ${port}`)
    }
    catch(err) {
        console.log("server error: ", err.message);
    }
})