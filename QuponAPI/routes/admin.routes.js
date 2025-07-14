const controller = require('../controllers/admin.controller');
const auth = require('../middlewares/auth.middleware');

module.exports = app => {
  const router = require('express').Router();
  router.get('/coupons', auth, controller.listCoupons);
  router.post('/block/:id', auth, controller.blockCoupon);
  app.use('/api/admin', router);
};