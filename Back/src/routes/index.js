const express = require('express');
const router = express.Router();

//DOCTORS
const doctors=require('../apiServices/doctors/routes')

router.use('/doctor', doctors);

module.exports = router;