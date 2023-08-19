const { users, products, cart } = require("../model");
const express = require("express");
const {verifyAToken} = require("../middleware/AuthenticateUser")
const routes = express.Router();
const bodyParser = require('body-parser')

// ========== user routes ==========
routes.get("/users", (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get("/user/:id", (req, res)=>{
    users.fetchUser(req, res)
})
routes.post("/login", bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
routes.post("/register", bodyParser.json(), (req, res)=>{
    users.register(req, res)
})
routes.patch("/user/:id", bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.delete("/user/:id", bodyParser.json(), (req, res)=>{
    users.removeUser(req, res)
})

// ========== product routes ==========
routes.get("/products", (req, res)=>{
    products.fetchProducts(req, res)
})
routes.get('/product/:productID', (req, res)=>{
    products.fetchProduct(req, res)
})
routes.post("/product", bodyParser.json(), (req, res)=>{
    products.addProduct(req, res)
})
routes.patch("/product", bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})
routes.delete("/product/:productID", (req, res)=>{
    products.removeProduct(req, res)
})

// ========== cart routes ==========
routes.get("/cart", (req, res)=>{
    cart.fetchItems(req, res)
})
routes.get("/cart/:cartID", (req, res)=>{
    cart.fetchItem(req, res)
})
routes.post("/cart", bodyParser.json(), (req, res)=>{
    cart.insertItem(req, res)
})
routes.delete("/cart/:cartID", (req, res)=>{
    cart.removeItem(req, res)
})
routes.patch("/cart/:cartID", bodyParser.json(), (req, res)=>{
    cart.updateItem(req, res)
})

module.exports = {
  express,
  routes
};
