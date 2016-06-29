var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Venta de Mosquiteros / Toldos' });
});

module.exports = router;
