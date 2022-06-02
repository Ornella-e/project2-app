const Product = require("../models/Product.model");

const isOwner = async (req, res, next) => {
	console.log(req.session.currentUser._id);
	
	const {id} = req.params;
    const product = await Product.findById(id).populate('owner');
	//console.log(product.owner._id.valueOf());
	if (req.session.currentUser._id === product.owner._id.valueOf()) {
		return next();
	}
	res.redirect("/");
	
}

module.exports = isOwner