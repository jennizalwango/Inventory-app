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
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "item",
    },
  ],
});

module.exports = CategorySchema;
