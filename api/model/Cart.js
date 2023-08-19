const db = require('../config')

class Cart{
    fetchItems(req, res){
        const query = `
            SELECT cartID, userID, productID, QUANTITY FROM CART
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchItem(req, res){
        const query = `
            SELECT cartID, userID, productID, QUANTITY FROM CART WHERE cartID = ${req.params.cartID}
        `
        db.query(query, [req.params.cartID], (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    insertItem(req, res){
        const query = `
            INSERT INTO Cart VALUES(?, ?, ?, ?)
        `
        db.query(query, [req.body, req.params.userID, req.params.productID, req.params.QUANTITY], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Item added to cart"
            })
        })
    }
    deleteItem(req, res){
        const query = `
            DELETE FROM CART WHERE cartID = ${req.params.cartID}
        `
        db.query(query, [req.params.cartID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Item removed from cart"
            })
        })
    }
}

module.exports = Cart