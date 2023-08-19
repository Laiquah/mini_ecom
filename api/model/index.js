const { Users } = require('./Users')
const { Products } = require('./Products')
const { Cart } = require("./Cart")

module.exports = {
    users: new Users(),
    products: new Products(),
    cart: new Cart()
}