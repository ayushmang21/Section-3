const {model, Schema}  = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    message : String
})

module.exports = model( 'feedbacks', mySchema);