const db = require('../config')
const { hash, compare, hashSync } = require('bcrypt')

class Users{
    fetchUsers(req, res){
        const query = `
            SELECT userID, username, userSignUp, userEmail FROM Users
        `
        db.query(query, (err, results)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res){
        const query = `
            SELECT userID, username, userSignUp, userEmail FROM Users WHERE userID = ${req.params.id}
        `
        db.query(query, [req.params.id], (err, result)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    async register(req, res){
        const data = req.body
        data.userPass = await hash(data.userPass, 15)
        const user = {
            email: data.userEmail,
            password: data.userPass
        }
        const query = `
            INSERT INTO Users SET ?
        `
        db.query(query, [data], (err)=>{
            if (err) throw err
            let token = createToken(user)
            res.json({
                status: res.statusCode,
                token,
                msg:"User registered successfully"
            })
        })
    }
    async login(req, res){
        const { emailAdd, userPass } = req.body

        const query = `
        SELECT userID, username, userSignUp, userEmail FROM Users WHERE userEmail = ?
        `                              
        db.query(query, [emailAdd], async (err, result)=>{
            if (err) throw err
            if (!result?.length){
                res.json({
                    status: res.statusCode,
                    msg:"You are providing the wrong email"
                })
            } else{
                await compare(userPass, result[0].userPass, (cErr, cResult)=>{
                    if (cErr) throw cErr
                    const token = createToken({
                        emailAdd, 
                        userPass
                    })
                    if(!cResult){
                        res.json({
                            status: res.statusCode,
                            msg:"Invalid e-mail or password"
                        })
                    } else{
                        res.json({
                            status: res.statusCode,
                            msg:"Logged in successfully!",
                            token,
                            cResult: cResult[0]
                        })
                    }
                })
            }
        })                                                                                                                                                                                                                                                                                                                                             
    }
    removeUser(req, res){
        const query = `
            DELETE FROM Users WHERE userID = ${req.params.id}
        `
        db.query(query, [req.params.id], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"User deleted successfully"
            })
        })
    }
    updateUser(req, res){
        const query = `
            UPDATE Users SET ? WHERE userID = ${req.params.id}
        `
        db.query(query, [req.params.id], (err)=>{
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg:"User details updated successfully!"
            })
        })
    }
}

module.exports = {Users};