const router = require('express').Router();

router.route('/').get((req, res) => {
    res.json('Hi')
})

module.exports = router;