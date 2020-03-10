const httpStatus = require('http-status');
const util = require('./util');

const randomSamples = async (req, res) => {
  try {
    let { n } = req.query;

    n = n ? parseInt(n, 10) : 18;

    const ans = await util.randomSamples(n);

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


module.exports = {
  randomSamples,
};
