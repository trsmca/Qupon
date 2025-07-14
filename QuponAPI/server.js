const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/coupon.routes')(app);
require('./routes/admin.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));