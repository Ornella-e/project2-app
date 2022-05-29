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
        const {question} = req.body;
        await Question.create({
            question
        });
        res.render("question/question-create");
    }catch(error){
        next (error);
    }
});

module.exports = router;