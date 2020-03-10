const httpStatus = require('http-status');
const util = require('./util');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const ans = await util.getById(id);

    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found' });
    }
    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const getAll = async (req, res) => {
  try {
    const ans = await util.getAll();

    if (!ans) {
      return res
        .status(httpStatus.NOT_FOUND)
        .send({ message: 'Not found' });
    }
    return res
      .status(httpStatus.OK)
      .send(ans);
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const create = async (req, res) => {
  try {
    const { body } = req;

    await util.create(body);

    return res
      .status(httpStatus.CREATED)
      .send({ message: 'Created' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Interal server error' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    await util.remove(id);

    return res
      .status(httpStatus.OK)
      .send({ message: 'Removed' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

const removeAll = async (req, res) => {
  try {
    const { id } = req.params;

    await util.removeAll(id);

    return res
      .status(httpStatus.OK)
      .send({ message: 'Removed' });
  } catch (error) {
    console.error(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({ message: 'Internal server error' });
  }
};

module.exports = {
  getById,
  getAll,
  create,
  remove,
  removeAll,
};
