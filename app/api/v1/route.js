const { Router } = require('express');

const router = new Router();

/*
 * References to each resource routers
 */
const audio = require('./components/audio/route');
const model = require('./components/model/route');
const score = require('./components/score/route');
const speaker = require('./components/speaker/route');
const utterance = require('./components/utterance/route');
const survey = require('./services/survey/route');

router.use('/audio', audio);
router.use('/model', model);
router.use('/score', score);
router.use('/speaker', speaker);
router.use('/utterance', utterance);
router.use('/survey', survey);

module.exports = router;
