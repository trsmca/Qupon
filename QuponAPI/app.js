const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public'));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/coupons', require('./routes/coupon.routes'));
app.use('/api/admin', require('./routes/admin.routes'));

module.exports = app;
