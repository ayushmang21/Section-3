const { model, Schema } = require('../connection');

const mySchema = new Schema({
    sender : String,
    content : String,
    image : String
});

module.exports = model( 'posts', mySchema );