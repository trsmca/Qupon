const controller = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

module.exports = app => {
  const router = require('express').Router();
  router.get('/me', auth, controller.getProfile);
  router.post('/complete-profile', auth, controller.completeProfile);
  app.use('/api/user', router);
};