const router = require("express").Router();
const session = require("express-session");
const async = require("hbs/lib/async");
const Product = require("../models/Product.model");

const Question = require("../models/Question.model");

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


router.get("/booksAndMusic", async (req, res, next) => {
    try{
        const products = await Product.find();
        const booksAndMusicProducts = products.filter((product) => {
            return product.category === 'Books and music';
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

router.get("/search", async (req, res) => {
	const { q } = req.query;
	try {
		const searchResults = await Product.find({ products:{$regex: q}});
		console.log(searchResults);
		res.render("product/product-details", { data : searchResults });
	} catch (e) {
		console.error(e);
	}
});

router.get("/:id", async (req, res, next) => {
    try{
        const {id} = req.params;

        const product = await Product.findById(id).populate({path:'questions', populate:{path:'user', model:'User', select:'username'}});
        console.log(product);
       
        res.render ("product/product-details", {product});

    }catch (error){
        next (error);
    }
})
router.post ("/:id", async (req, res, next)=>{
   
    try{
        const {id} = req.params;
        const {question} = req.body;
        const newQuestion = await Question.create({
            user: req.session.currentUser._id,
            question
        });
       const product = await Product.findById(id).exec();
       product.questions.push(newQuestion);
       const updatedProduct = await product.save();
       const product1 = await Product.findById(id).populate({path:'questions', populate:{path:'user', model:'User', select:'username'}});
       console.log(product1);
        res.render("product/product-details", {product: product1});
    }catch(error){
        next (error);
    }
});

module.exports = router;