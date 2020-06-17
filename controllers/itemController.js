const item = require("../models/Item")

module.exports = {
    Item: (req, res) => {
        const additem = new Item({
            status : req.body.status,
            name: req.body.name,
            quantity : req.body.quantity,
            unitPrice: req.body.unitPrice,
            description:req.body.description,
            category:req.body.category
        })
        additem.save()
        

    }
}