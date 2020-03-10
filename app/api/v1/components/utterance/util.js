const Utterance = require('./model');

const getAll = async () => Utterance.find({});

const getById = async (id) => Utterance.findOne({ id });

const create = async (body) => new Utterance({
  id: body.id,
  contentID: body.contentID,
  styleID: body.styleID,
  outputID: body.outputID,
  modelID: body.modelID,
}).save();

const remove = async (id) => Utterance.findOneAndRemove({ id });

const removeAll = async () => Utterance.remove({});

module.exports = {
  getAll,
  getById,
  create,
  remove,
  removeAll,
};
