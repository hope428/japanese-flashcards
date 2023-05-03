const { Schema, model } = require("mongoose");
const wordSchema = require('./Word')


const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    level: Number,
    masteredWords: [wordSchema]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema)

module.exports = Student