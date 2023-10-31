const express = require("express")

const router = express.Router()
const {user} = require("../db/db")


router.post('/', (req, res) => {
    const {email, password} = req.body

    if (email !== user.email) {
        return res.status(400).json({message : "Invalid credentails"})
    } else if (password !== user.password) {
        return res.status(400).json({message : "Invalid credentials"})
    }
   
    return res.status(200).json({message : "Login Successful",  user: {email, password}})
})


module.exports = router
