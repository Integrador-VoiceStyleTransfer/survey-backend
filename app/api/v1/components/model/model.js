const createModel = require('../../util/util');

const schema = {
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
};

const model = createModel('Model', schema);

module.exports = model;
