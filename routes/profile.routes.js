const User = require("../models/User.model");
const Product = require("../models/Product.model");

const router = require("express").Router();

router.get("/edit", async (req, res, next) => {
    try {
        const id = req.session.currentUser._id;
        const user = await User.findById(id);
        res.render("profile/profile-edit", user);
    } catch (error) {
        next(error);
    }
});

router.post("/edit", async (req, res, next) => {
    try {
        const id = req.session.currentUser._id;
        const { username, password, fullName, email, city, country } = req.body;
        await User.findByIdAndUpdate(id,
            {
                username,
                password,
                fullName,
                email,
                location: {
                    city,
                    country
                },
            },
            {
                new: true
            });
            res.redirect("/profile");
    } catch (error) {
        next(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const id = req.session.currentUser._id;
        const user = await User.findById(id)
        const products = await Product.find()
        const myAds = await products.filter((product) => {
            return product.owner === user;
        });
       console.log(myAds);
        res.render("profile/profile-details", {user, myAds});
    } catch (error) {
        next(error);
    }
});

module.exports = router;
