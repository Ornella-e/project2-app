const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required:true},
    question: { type: String, maxlength: 200, required:true}
   
  });

  const Question = model("Question", questionSchema);

module.exports = Question;