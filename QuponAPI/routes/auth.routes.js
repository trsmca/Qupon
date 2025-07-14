const controller = require('../controllers/auth.controller');
module.exports = app => {
  const router = require('express').Router();
  router.post('/verify-otp', controller.verifyOTP);
  app.use('/api/auth', router);
};