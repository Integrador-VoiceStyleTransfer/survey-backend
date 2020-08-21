const { Router } = require('express');
const controller = require('./controller');

const router = new Router();

router.route('/')
  .get((req, res) => controller.getAll(req, res))
  .post((req, res) => controller.create(req, res))
  .delete((req, res) => controller.removeAll(req, res));

router.route('/random')
  .get((req, res) => controller.randomSample(req, res));

router.route('/:id')
  .get((req, res) => controller.getById(req, res))
  .put((req, res) => controller.update(req, res))
  .delete((req, res) => controller.remove(req, res));

module.exports = router;
