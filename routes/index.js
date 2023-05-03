const router = require('express').Router();

router.use('/discussion/', require('./discussionRoutes'));

module.exports = router;