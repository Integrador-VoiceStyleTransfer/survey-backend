const Score = require('../../components/score/model');
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

  for (const model of models) {
    const utterances = await getSamplesByModel(model.id, nSamples);
    list = list.concat(utterances);
    console.log(list);
  }
  return list;
};

const statsByModel = async () => {
  let res = await Score
    .aggregate()
    .lookup({ from: 'utterances', localField: 'utteranceID', foreignField: 'id', as: 'utterance' })
    .unwind('utterance')
    .lookup({ from: 'models', localField: 'utterance.modelID', foreignField: 'id', as: 'model'})
    .unwind('model')
    .lookup({ from: 'audios', localField: 'utterance.contentID', foreignField: 'id', as: 'content'})
    .lookup({ from: 'audios', localField: 'utterance.styleID', foreignField: 'id', as: 'style'})
    .lookup({ from: 'audios', localField: 'utterance.outputID', foreignField: 'id', as: 'output'})
    .unwind('content')
    .unwind('style')
    .unwind('output')
    .lookup({ from: 'speakers', localField: 'content.speakerID', foreignField: 'id', as: 'contentSpeaker'})
    .lookup({ from: 'speakers', localField: 'style.speakerID', foreignField: 'id', as: 'styleSpeaker'})
    .lookup({ from: 'speakers', localField: 'output.speakerID', foreignField: 'id', as: 'outputSpeaker'})
    .unwind('contentSpeaker')
    .unwind('styleSpeaker')
    .unwind('outputSpeaker');

  return res;
};


module.exports = {
  randomSamples,
  statsByModel,
};
