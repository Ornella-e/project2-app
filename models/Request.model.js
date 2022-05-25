const { Schema, model } = require("mongoose");

const requestSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: String, maxlength: 200 }
  });

  const Request = model("Request", requestSchema);

module.exports = Request;