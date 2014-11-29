var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Height and Weight calculator' });

  console.log('res :', res);
  console.log('req :', req);


});

module.exports = router;
