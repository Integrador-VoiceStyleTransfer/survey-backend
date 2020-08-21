const Audio = require('./model');

const getAll = async () => Audio.find({});

const getById = async (id) => Audio.findOne({ id });

const create = async (body) => new Audio({
  id: body.id,
  speakerID: body.speakerID,
  url: body.url,
  type: body.type,
  description: body.description,
}).save();

const update = async (id, body) => Audio.findOneAndUpdate({ id }, body);

const remove = async (id) => Audio.findOneAndRemove({ id });

const removeAll = async () => Audio.remove({});

const randomSample = async (n) => Audio.aggregate().sample(n);

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  randomSample,
  removeAll,
};
