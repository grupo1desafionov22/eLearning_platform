const users = require('../models/users');

const renderUsers = async (req, res) => {
    try {
        const allUsers = await users.getAllUsers(req);
        res.status(200).json(allUsers);
        console.log(allUsers);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error retrieving users');
    }
}

module.exports = {
    renderUsers
}
