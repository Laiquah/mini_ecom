const { users } = require('./Users')
const { products } = require('./Products')

module.exports = {
    users: new users(),
    products: new products()
}