const createModel = require('../../util/util');

const schema = {
  id: {
    type: Number,
    required: true,
  },
  contentID: {
    type: Number,
  },
  styleID: {
    type: Number,
  },
  outputID: {
    type: Number,
  },
  modelID: {
    type: Number,
    required: true,
  },
};

const model = createModel('Utterance', schema);

module.exports = model;
