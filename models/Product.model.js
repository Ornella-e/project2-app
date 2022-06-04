const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        imageUrl: String,
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        location: {
            city: String,
            country: String
        },
        condition:  {
            type: String,
            enum: ['New', 'Used']
        },
        category: {
            type: String,
            enum: ['Books and Music', 'Clothes', 'Electronics', 'Furniture', 'Miscellaneous']
        },
        description: String,
        dateListed: {
            type: Date,
            default: Date.now
        },
        favorites: Number, //?
        questions: [{
            type: Schema.Types.ObjectId,
            ref: "Question"
        }],
        requests: [{
            type: Schema.Types.ObjectId,
            ref: "Request"
        }]
    }
);

const Product = model("Product", productSchema);

module.exports = Product;