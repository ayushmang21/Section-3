const { model, Schema} = require('../connection');

const mySchema = new Schema({
    category : String,
    color : String,
    size : String,
    price : String,
});

module.exports = model( 'products', mySchema);