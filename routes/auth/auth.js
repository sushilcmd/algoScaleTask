const router = require('express').Router();
const { userLogin } = require('../../controller/auth/login');
const { newUserRegister } = require('../../controller/auth/register');

router.post('/login', userLogin);
router.post('/register', newUserRegister);

module.exports = router;