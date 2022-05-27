const User = require("../models/User.model");

const router = require("express").Router();

router.get("/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.session.currentUser._id;
        const user = await User.findById(id);
        res.render("profile/profile-edit", user);
    } catch (error) {
        next(error);
    }
});

router.post("/:id/edit", async (req, res, next) => {
    try {
        const { id } = req.session.currentUser._id;
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
            res.redirect(`/${id}`);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
   // console.log('user id:', req.session.currentUser._id);
    try {
        const { id } = req.session.currentUser._id;
        const user = await User.findById(id)
        res.render("profile/profile-details", user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
