const mongoose = require('mongoose')
const ItemSchema = require("./schemas/ItemSchema")

const Item  = mongoose.model("Item", ItemSchema)

module.exports = Item;