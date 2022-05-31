const router = require("express").Router();
const session = require("express-session");
const async = require("hbs/lib/async");
const Product = require("../models/Product.model");

router.get("/", async (req, res, next) => {
    try{
        const products = await Product.find();
        
        res.render("index", { products });
    }catch (error){
        next(error);
    }
})

router.get("/booksAndMusic", async (req, res, next) => {
    try{
        const products = await Product.find();
        const booksAndMusicProducts = products.filter((product) => {
            return product.category === 'Books and Music';
        });
        res.render("product/booksAndMusic", { booksAndMusicProducts });
    }catch (error){
        next(error);
    }
})

router.get("/clothes", async (req, res, next) => {
    try{
        const products = await Product.find();
        const clotheProducts = products.filter((product) => {
            return product.category === 'Clothes';
        });
        res.render("product/clothes", { clotheProducts });
    }catch (error){
        next(error);
    }
})

router.get("/electronics", async (req, res, next) => {
    try{
        const products = await Product.find();
        const electronicProducts = products.filter((product) => {
            return product.category === 'Electronics';
        });
        res.render("product/electronics", { electronicProducts });
    }catch (error){
        next(error);
    }
})

router.get("/furniture", async (req, res, next) => {
    try{
        const products = await Product.find();
        const furnitureProducts = products.filter((product) => {
            return product.category === 'Furniture';
        });
        res.render("product/furniture", { furnitureProducts });
    }catch (error){
        next(error);
    }
})

router.get("/miscellaneous", async (req, res, next) => {
    try{
        const products = await Product.find();
        const miscellaneousProducts = products.filter((product) => {
            return product.category === 'Miscellaneous';
        });
        res.render("product/miscellaneous", { miscellaneousProducts });
    }catch (error){
        next(error);
    }
})

router.get("/publish", (req, res, next)=>{
    res.render("product/product-publish");
})

router.post ("/publish", async (req, res, next)=>{
    try{
        const {name, imageUrl, city, country, condition, category, description, dateListed} = req.body;
        await Product.create({
            name,
            owner: req.session.currentUser._id,
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

router.get("/:id/edit", async (req, res, next)=>{
try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("product/product-edit", product);
}catch (error){
next(error);
}
});

router.post("/:id/edit", async (req, res, next)=>{
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

router.post("/:id/delete", async (req, res, next)=>{
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
        const product = await Product.findById(id);
        res.render ("product/product-details", product);
    }catch (error){
        next (error);
    }
})

module.exports = router;