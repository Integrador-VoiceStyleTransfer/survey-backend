const createModel = require('../../util/util');

const schema = {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
  accent: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
};

const model = createModel('Speaker', schema);

module.exports = model;
