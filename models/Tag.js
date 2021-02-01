'use strict';

const mongoose = require('mongoose');

//definimos un esquema
const tagSchema = mongoose.Schema({
        tag: {type: String, index: true}
    }, {
        collection: 'Tags'
});


tagSchema.statics.lista = function(filtro) {
    const query = Tag.find(filtro);
    return query.exec();
}

//creamos el modelo con el esquema definido
const Tag = mongoose.model('Tag', tagSchema);

//exportamos el modelo
module.exports = Tag;
