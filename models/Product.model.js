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
        condition: String,
        description: String,
        dateListed: Date, //?date that was published
        favorites: Number, //?
        questions: [{
            type: Schema.Types.ObjectId,
            ref: "Request"
        }]
    }
);

const Product = model("Product", productSchema);

module.exports = Product;