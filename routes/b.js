var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('b', {
        title: 'Page B'
    });
});


module.exports = router;