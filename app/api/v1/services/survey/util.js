const Utterance = require('../../components/utterance/model');
const Model = require('../../components/model/model');

const getSamplesByModel = async (modelID, n) => Utterance.aggregate().match({ modelID }).sample(n)
  .lookup({
    from: 'audios', localField: 'contentID', foreignField: 'id', as: 'content',
  })
  .lookup({
    from: 'audios', localField: 'styleID', foreignField: 'id', as: 'style',
  })
  .lookup({
    from: 'audios', localField: 'outputID', foreignField: 'id', as: 'output',
  })
  .project({
    _id: 0,
    id: 1,
    modelID: 1,
    content: 1,
    style: 1,
    output: 1,
  });

const randomSamples = async (n) => {
  const models = await Model.find({});
  const nModels = models.length;
  const nSamples = Math.floor(n / nModels);
  let list = [];
  console.log(n);
  console.log(nModels);
  
  console.log(nSamples);
  
  
  // console.log(models);

  await models.forEach(async (model) => {
    const utterances = await getSamplesByModel(model.id, nSamples);
    console.log(utterances);
    // list = list.concat(utterances);
  });

  console.log(list);
}

module.exports = {
  randomSamples,
};
