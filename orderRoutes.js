const router = require("express").Router();
const Order = require("../models/order");
const auth = require("../middleware/auth");

router.post("/" , async(req , res) => {
    const order = await Order.create({
        buyer: req.user.id,
        items: req.body.items,
        total: req.body.total
    });
    res.json(order);
});

module.exports = router;