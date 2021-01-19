const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

// router middleware
router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;