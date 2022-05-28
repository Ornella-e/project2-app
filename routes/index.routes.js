const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.use("/", require("./auth.routes"));
router.use("/", require("./product.routes"));
router.use("/profile", require("./profile.routes"));
router.use("/about", require("./about.routes"));

module.exports = router;
