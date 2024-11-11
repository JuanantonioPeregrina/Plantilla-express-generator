var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const items = [
    { image: '/images/item1.jpg', text: 'Item 1' },
    { image: '/images/item2.jpg', text: 'Item 2' },
    { image: '/images/item3.jpeg', text: 'Item 3' }
  ];
  res.render('index', { title: 'Home', items });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});


module.exports = router;
