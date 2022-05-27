const router = require("express").Router();
const async = require("hbs/lib/async");
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
        const {name, imageUrl, city, country, condition, category, description, dateListed} = req.body;
        await Product.create({
            name,
            imageUrl,
            location:{city, country},
            condition,
            category,
            description,
            dateListed
        });
        res.redirect("/profile");
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
        const {name, imageUrl, city, country, condition, description}=req.body;
        await Product.findByIdAndUpdate(id,
            {
                name,
                imageUrl,
                location: {
                    city,
                    country
                },
                condition,
                categorie,
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