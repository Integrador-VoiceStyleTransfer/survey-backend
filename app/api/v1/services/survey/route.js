const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.route('/random')
  .get((req, res) => controller.randomSamples(req, res));

router.route('/stats')
  .get((req, res) => controller.stats(req, res));

router.route('/tl')
  .get((req, res) => controller.tl(req, res));

module.exports = router;
