const Model = require('./model');

const getAll = async () => Model.find({});

const getById = async (id) => Model.findOne({ id });

const create = async (body) => new Model({
  id: body.id,
  description: body.description,
}).save();

const remove = async (id) => Model.findOneAndRemove({ id });

const removeAll = async () => Model.remove({});

module.exports = {
  getAll,
  getById,
  create,
  remove,
  removeAll,
};
