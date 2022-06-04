const { Schema, model } = require("mongoose");

const requestSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    request: { type: String, maxlength: 200 },
    product: {  type: Schema.Types.ObjectId, ref: "Product" }
  });

  const Request = model("Request", requestSchema);

module.exports = Request;