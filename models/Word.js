const { Schema, model } = require("mongoose");

const wordSchema = new Schema(
  {
    word: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Word = model("word", wordSchema);

module.exports = { Word, wordSchema };
