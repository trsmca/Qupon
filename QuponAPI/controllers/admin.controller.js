const Coupon = require('../models/coupon.model');

exports.listCoupons = async (req, res) => {
  const coupons = await Coupon.getAll();
  res.send(coupons);
};

exports.blockCoupon = async (req, res) => {
  await Coupon.block(req.params.id);
  res.send({ message: 'Coupon blocked' });
};