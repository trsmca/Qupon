const Coupon = require('../models/coupon.model');

exports.uploadCoupon = async (req, res) => {
  const { brand, expiry, discount, price, terms } = req.body;
  const file = req.files?.screenshot;

  if (!file) return res.status(400).send({ message: 'Screenshot required' });

  const imagePath = `uploads/${Date.now()}_${file.name}`;
  file.mv(imagePath, async err => {
    if (err) return res.status(500).send({ message: 'Upload failed' });

    try {
      await Coupon.create({ userId: req.userId, brand, expiry, discount, price, terms, imagePath });
      res.send({ message: 'Coupon uploaded for verification' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
};