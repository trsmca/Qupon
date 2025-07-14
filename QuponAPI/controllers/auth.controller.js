const admin = require("firebase-admin");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.verifyOTP = async (req, res) => {
  const { uid, phone } = req.body;

  try {
    const existingUser = await User.findByPhone(phone);
    if (!existingUser) {
      await User.createUser({ phone, isProfileComplete: false });
    }
    const user = await User.findByPhone(phone);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.send({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
