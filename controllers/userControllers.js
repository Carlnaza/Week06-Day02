const router = require('express').Router()
const users = require('../db')

router.get('/users', (req, res) => {
    res.json({
        status: 200,
        message: "GET Request Successful",
        data: users
    })
})

router.get('/one_user', (req, res) => {

})

module.exports = router