const Product = require("../models/Product.model");

const isOwner = async (req, res, next) => {
	const {id} = req.params;
    const product = await Product.findById(id).populate('owner');
	if (req.session.currentUser._id === product.owner._id.valueOf()) {
		return next();
	}
	res.redirect("/");
}

module.exports = isOwner