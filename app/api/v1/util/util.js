const mongoose = require('mongoose');

const createModel = (modelName, schema) => {
  const mongooseSchema = new mongoose.Schema(schema);
  const model = mongoose.model(modelName, mongooseSchema);

  return model;
};

module.exports = createModel;
