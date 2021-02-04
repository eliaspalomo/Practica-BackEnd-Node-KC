var express = require('express');
var router = express.Router();

const nodePOP = require('../models/NodePOP');
const tag = require('../models/Tag');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const articulo = req.query.articulo;
    const venta = req.query.venta;
    const precio = req.query.precio;
    const tags = req.query.tags;
    
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filtro = {};

    if(articulo) {
        filtro.articulo = articulo
    }
    
    if (venta==="V") {
        filtro.venta = true
    } else if (venta==="C") {
        filtro.venta = false
    }

    if(precio) {
        filtro.precio = precio
    }

    if (tags) {
        filtro.tags = tags
    }

    const nodePOPs = await nodePOP.lista(filtro, limit, skip, fields, sort);
    const tagsmodel = await tag.find();
    res.render('index', {title: 'NodePOP', nodePOPs: nodePOPs, tags: tagsmodel});
      
  } catch (err) {
      next(err);
  }
});

module.exports = router;
