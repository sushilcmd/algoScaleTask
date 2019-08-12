const { login } = require('../../services/auth/login');

exports.userLogin = async function (req, res) {
    const payload = req["body"];
    try {
        const user = await login(payload);
        res.json({
            meta: "User login sucessfull", status: true,
            data: user
        })
    } catch (error) {
        res.json({
            meta: { msg: error.message, status: false }
        });
    }
}