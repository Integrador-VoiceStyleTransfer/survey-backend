const createModel = require('../../util/util');

const schema = {
  similarity: {
    type: Number,
  },
  naturalness: {
    type: Number,
  },
  nativeness: {
    type: Number,
  },
  intelligibility: {
    type: Number,
  },
  utteranceID: {
    type: Number,
    required: true,
  },
};

const model = createModel('Score', schema);

module.exports = model;
