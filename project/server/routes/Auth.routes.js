const express = require('express');
const router = express.Router();
const authControlelr = require('../controllers/Auth.controller');

router.post('/register', authControlelr.register)
router.post('/login', authControlelr.login)

module.exports = router;
