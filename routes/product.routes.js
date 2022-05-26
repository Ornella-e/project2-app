const router = require("express").Router();
const Product = require("../models/Product.model");

router.get("/", async (req, res, next) => {
    try{
        const products = await Product.find();
        res.render("views/index", { products });
    }catch (error){
        next(error);
    }
})

router.get("/publish", (req, res, next)=>{
    res.render("product/product-publish");
})

router.post ("/publish", async (req, res, next)=>{
    try{
        const {name, imageUrl, city, country, condition, description, dateListed} = req.body;
        await Product.create({
            name,
            imageUrl,
            location:{city, country},
            condition,
            description,
            dateListed
        });
        res.redirect("/profile");
    }catch(error){
        next (error);
    }
})

module.exports = router;