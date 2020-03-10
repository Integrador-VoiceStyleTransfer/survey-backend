const Speaker = require('./model');

const getAll = async () => Speaker.find({});

const getById = async (id) => Speaker.findOne({ id });

const create = async (body) => new Speaker({
  id: body.id,
  name: body.name,
  gender: body.gender,
  accent: body.accent,
  age: body.age,
}).save();

const remove = async (id) => Speaker.findOneAndRemove({ id });

const removeAll = async () => Speaker.remove({});

module.exports = {
  getAll,
  getById,
  create,
  remove,
  removeAll,
};
