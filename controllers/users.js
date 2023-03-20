const Users = require('../schemas/users');


const getUsers = async (req, res) => {
    const query = await Users.findAll();
    res.status(200).json(query);
};

const getUserById = async (req, res) => {
    const query = await Users.findOne({ where: { user_id: req.params.user_id } });
    res.status(200).json(query);
};

const createUser = async (req, res) => {
    const query = await Users.create(req.body);
    res.status(201).json(query);
};

const updateUser = async (req, res) => {
    const update = await Users.update(req.body, { where: {user_id: req.body.user_id } });
    res.status(200).json(update);
};

const deleteUser = async (req, res) => {
    const deleted = await Users.destroy({ where: { user_id: req.body.user_id } });
    res.status(200).json(deleted);
};





const autores = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

};

module.exports = autores;