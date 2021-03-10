const router = require('express').Router()
const users = require('../db')

router.get('/users', (req, res) => {
    res.json({
        status: 200,
        message: "GET Request Successful",
        data: users
    })
})

router.post('/user', (req, res) => {

    let newUser = {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    }

    users.push(newUser)

    res.sendStatus(200)

})

module.exports = router