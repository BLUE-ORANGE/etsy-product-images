const express = require('express');
const path = require('path');

const router = express.Router();
const db = require('../database/index.js');

router.use('/:id', express.static(path.join(__dirname, '/../public/')));


router.get('/:id/images', (req, res) => {
  if (req.params.id) {
    db.getImagesForProduct(req.params.id)
      .then((data) => {
        const resp = {
          results: [],
        };
        resp.results = data;
        res.send(resp);
      })
      .catch((err) => {
        res.statusCode = 404;
        res.send(err);
      });
  }
});

router.get('/image/:id', (req, res) => {
  if (req.params.id) {
    db.getImageById(req.params.id, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.send(err);
      } else {
        res.send(data.imageUrl);
      }
    });
  }
});

module.exports = router;
