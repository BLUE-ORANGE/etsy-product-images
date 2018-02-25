var express = require('express');
var router = express.Router();
var db = require('../database/index.js');


router.get('/:id/images', (req, res) => {
  var id = req.params.id;
  if (id) {
    db.getImageById(id, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.send(err);
      } else {
        res.send(data);
      }
    })
  }
});


module.exports = router;