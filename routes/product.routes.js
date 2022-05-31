const router = require("express").Router();
const session = require("express-session");
const async = require("hbs/lib/async");
const Product = require("../models/Product.model");
const isLoggedIn = require("../middlewares/isLoggedIn");
const isOwner = require('../middlewares/isOwner');

router.get("/", async (req, res, next) => {
    try{
        const products = await Product.find();
        
        res.render("index", { products });
    }catch (error){
        next(error);
    }
})

router.get("/publish", isLoggedIn, (req, res, next)=>{
    res.render("product/product-publish");
})

router.post ("/publish", isLoggedIn, async (req, res, next)=>{
    try{
        const {name, imageUrl, city, country, condition, category, description, dateListed} = req.body;
        await Product.create({
            name,
            owner: req.session.currentUser,
            imageUrl,
            location:{city, country},
            condition,
            category,
            description,
            dateListed
        });
        res.redirect("/");
    }catch(error){
        next (error);
    }
});

router.get("/:id/edit", isOwner, async (req, res, next)=>{
try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("product/product-edit", product);
}catch (error){
next(error);
}
});

router.post("/:id/edit",isOwner, async (req, res, next)=>{
    try{
        const {id}=req.params;
        const {name, imageUrl, city, country, condition, category, description}=req.body;
        await Product.findByIdAndUpdate(id,
            {
                name,
                imageUrl,
                location: {
                    city,
                    country
                },
                condition,
                category,
                description
            },
                {
                    new: true
                
            });
            res.redirect(`/product/${id}`);
    }catch(error){
        next(error);
    }
});

router.post("/:id/delete", isOwner, async (req, res, next)=>{
    try{
        const {id}=req.params;
        await Product.findByIdAndDelete(id);
        res.redirect("/profile")
    }catch(error){
        next(error);
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id).populate('owner')
        res.render ("product/product-details", {product, user: req.session.currentUser._id.valueOf(), 
            owner: product.owner.username.valueOf()});
    }catch (error){
        next (error);
    }
})

module.exports = router;