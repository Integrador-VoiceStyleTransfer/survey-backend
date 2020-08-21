const createModel = require('../../util/util');

const schema = {
  id: {
    type: Number,
    required: true,
  },
  speakerID: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
};

const model = createModel('Audio', schema);

module.exports = model;
