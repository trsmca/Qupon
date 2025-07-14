const User = require('../models/user.model');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.send({ isProfileComplete: user.isProfileComplete });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.completeProfile = async (req, res) => {
  const { firstName, lastName, email, upi, bankDetails } = req.body;
  try {
    await User.updateProfile(req.userId, { firstName, lastName, email, upi, bankDetails });
    res.send({ message: "Profile completed." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};