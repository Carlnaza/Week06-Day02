// Importing express Router() method to route requests. Same as other files
const router = require('express').Router()

// Importing routes from specific files like userControllers.js, and adding /api infront of the route.
router.use('/api', require('./blogControllers.js'))
router.use('/api', require('./userControllers.js'))

// Exporting all of the routes out of the folder
module.exports = router