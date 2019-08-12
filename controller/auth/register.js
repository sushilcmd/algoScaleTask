const { register } = require('../../services//auth/register');

exports.newUserRegister = async function (req, res) {
    const payload = req["body"];
    try {
        const newUser = await register(payload);
        res.json({
            meta: { msg: 'New user registered', status: true },
        })
    } catch (error) {
        res.json({
            meta: error.message, status: false
        })
    }
}