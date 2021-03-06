const router = require("express").Router();
const Product = require('../models/Product.model')

router.get("/", async(req, res, next) => {
  try{
    const products = await Product.find();
    
    res.render("index", { products });
}catch (error){
    next(error);
}
});

router.use("/auth", require("./auth.routes"));
router.use("/product", require("./product.routes"));
router.use("/profile", require("./profile.routes"));
router.use("/about", require("./about.routes"));


module.exports = router;
