const { Schema } = require("mongoose");

// Schema for items
const ItemSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Integer,
    required: true,
  },
});

module.exports = ItemSchema;
