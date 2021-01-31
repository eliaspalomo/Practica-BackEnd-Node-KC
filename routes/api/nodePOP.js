var express = require('express');
var router = express.Router();

const NodePOP = require('../../models/NodePOP');

/* GET /api/nodePOP */
router.get('/', async function(req, res, next) {
    try {
//        const name = req.query.name;
//        const age = req.query.age;
        const limit = parseInt(req.query.limit);
        const skip = parseInt(req.query.skip);
        const fields = req.query.fields;
        const sort = req.query.sort;

        const filtro = {};

//        if(name) {
//            filtro.name = name
//        }

//        if (age) {
//            filtro.age = age
//        }

        const resultado = await NodePOP.lista(filtro, limit, skip, fields, sort);
        res.json(resultado);
    } catch (err) {
        next(err);
    }
});

// GET /api/nodePOP:id
router.get('/:id', async (req, res, next) => {
    try{
        const _id = req.params.id;

        const nodePOP = await NodePOP.findOne({_id: _id});

        if(!nodePOP){
            return res.status(404).json({error: 'Not found'})
        }

        res.json({result: nodePOP});

    } catch (err){
        next(err);
    }
});

// POST /api/nodePOP (body) -> crear un nodePOP
router.post('/', async(req, res, next) => {
    try {
        const nodePOPData = req.body;

        const nodePOP = new NodePOP(nodePOPData);

        const nodePOPCreado = await nodePOP.save();

        res.status(201).json({nodePOPCreado});
    } catch (error) {
        next(error);
    }
});

// PUT /api/nodePOP:id (body) -> para actualizar un nodePOP
router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const nodePOPData = req.body;

        const nodePOPActualizado = await NodePOP.findOneAndUpdate({_id: _id}, nodePOPData, {
            new: true,
            useFindAndModify: false
        }); 

        res.json({result: nodePOPActualizado});
    } catch (error) {
        next(error);
    }
});

// DELETE /api/nodePOP:id -> elimina una nodePOP
router.delete('/:id', async (req, res, next) =>{
    try {
        const _id = req.params.id;

        await NodePOP.deleteOne({_id: _id});

        res.json();
    } catch (error) {
        next(error)
    }
});

module.exports = router;
