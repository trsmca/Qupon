const controller = require('../controllers/coupon.controller');
const auth = require('../middlewares/auth.middleware');

module.exports = app => {
  const router = require('express').Router();
  router.post('/upload', auth, controller.uploadCoupon);
  app.use('/api/coupons', router);
};