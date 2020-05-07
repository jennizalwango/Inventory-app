const { Schema } = require("mongoose");

// Schema for item categories
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = CategorySchema;
