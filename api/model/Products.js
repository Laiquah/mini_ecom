const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = `
            SELECT productID, productName, price, productDesc FROM Products;
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchProduct(req, res){
        const query = `
        SELECT productID, productName, price, productDesc FROM Products WHERE productID = ${req.params.productID}
        `
        db.query(query, [req.params.productID], (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    addProduct(req, res){
        const query = `
            INSERT INTO Products SET ?
        `
        db.query(query, [req.body], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Product inserted successfully"
            })
        })
    }
    removeProduct(req, res){
        const query = `
            DELETE FROM Products WHERE productID = ${req.params.productID}
        `
        db.query(query, [req.params.productID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"Product deleted successfully"
            })
        })
    }
    updateProduct(req, res){
        const query = `
            UPDATE Products SET ?
        `
        db.query(query, [req.body, req.params.productID], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "Product udpated successfully"
            })
        })
    }
}

module.exports = {Products}