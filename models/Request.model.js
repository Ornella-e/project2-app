const { Schema, model } = require("mongoose");

const requestSchema = new Schema({
    buyer: { type: Schema.Types.ObjectId, ref: "User" },
    seller: { type: Schema.Types.ObjectId, ref: "User" },
    request: [{user:{type: Schema.Types.ObjectId, ref: "User"}, conversation:{type: String, maxlength: 200}}],
    product: {  type: Schema.Types.ObjectId, ref: "Product" }
  });

  const Request = model("Request", requestSchema);

module.exports = Request;