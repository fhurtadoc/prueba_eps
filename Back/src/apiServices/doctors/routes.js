const doc_controller=require('./doc_controller')
const express = require('express');

const router = express.Router();

router.get('/list', doc_controller.listDoctors);

router.get('/list_specialty', doc_controller.list_specialty);


module.exports = router;