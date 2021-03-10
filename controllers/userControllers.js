// Importing express.Router() so we can use the Router() method from express.
const router = require('express').Router()
const users = require('../db')

// Creating a GET route to GET data from our fake 'database' *users*.
router.get('/users' , (req, res) => {
    // RESponding with a JSON that includes a status, message, and the DATA the front-end is requesting.
    res.json({
        status: 200,
        message: "GET Request Successful",
        data: users
    })
})

// Creating a POST route to CREATE data and add to our fake 'database' *users*
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

// Exporting all of the routes
module.exports = router