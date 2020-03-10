const Score = require('./model');

const getAll = async () => Score.find({});

const getById = async (id) => Score.findOne({ id });

const create = async (body) => new Score({
  similarity: body.similarity,
  naturalness: body.naturalness,
  nativeness: body.nativeness,
  intelligibility: body.intelligibility,
  utteranceID: body.utteranceID,
}).save();

const remove = async (id) => Score.findOneAndRemove({ id });

const removeAll = async () => Score.remove({});


module.exports = {
  getAll,
  getById,
  create,
  remove,
  removeAll,
};
