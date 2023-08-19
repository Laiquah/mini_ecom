const { users, products, cart } = require("../model");
const express = require("express");
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
routes.register("/register", bodyParser.json(), (req, res)=>{
    users.register(req, res)
})
routes.patch("/user/:id", bodyParser.json(), (req, res)=>{
    users.updateUser(req, res)
})
routes.delete("/user/:id", bodyParser.json(), (req, res)=>{
    users.removeUser(req, res)
})

module.exports = {
  express,
  routes,
};
