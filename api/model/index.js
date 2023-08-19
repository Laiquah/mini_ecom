const { users } = require('./Users')
const { products } = require('./Products')
const { cart } = require("./Cart")

module.exports = {
    users: new users(),
    products: new products(),
    cart: new cart()
}