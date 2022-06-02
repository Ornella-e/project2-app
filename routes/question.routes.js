const router = require("express").Router();
const session = require("express-session");
const async = require("hbs/lib/async");
const Question = require("../models/Question.model");

router.get("/create", (req, res, next)=>{
    res.render("question/question-create");
})

router.post ("/create", async (req, res, next)=>{
    try{
        const {id} = req.params;
        const {user,comment, product} = req.body;
        await Question.create({
            user,comment,product
        });
        res.render("product/product-details");
    }catch(error){
        next (error);
    }
});

module.exports = router;