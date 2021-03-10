const router = require('express').Router()

router.use('/api', require('./blogControllers.js'))
router.use('/api', require('./userControllers.js'))

module.exports = router