const { Schema, model } = require("mongoose");

//  Creating a schema to represent how the post will look.
// This is where the object and property to use, will be.
const postSchema = new Schema({
  uname: {
    type: String,
    required: [false, "Please provide a valid username"],
  },
  email: {
    type: String,
    required: [false, "please provide a valid email"],
  },
  salary: {
    type: String,
    required: [false, "This is a required input SALARY must be given"],
  },
  priority: {
    type: String,
    required: [false, "Priority must be HIGH OR MEDIUM"],
  },
  subject: {
    type: String,
    required: [false, "Subject is required"],
  },
});

module.exports = model("Posts", postSchema);
