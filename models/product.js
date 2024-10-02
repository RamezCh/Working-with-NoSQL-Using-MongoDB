const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  // _id is added automatically as object_id
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// model is to connect Schema with a name
module.exports = mongoose.model('Product', productSchema);
