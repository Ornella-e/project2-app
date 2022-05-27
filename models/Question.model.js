const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    question: { type: String, maxlength: 200 },
    product: {  type: Schema.Types.ObjectId, ref: "Product" }
  });

  const Question = model("Question", questionSchema);

module.exports = Question;