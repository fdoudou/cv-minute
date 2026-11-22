const {getUserModel, createUserModel, updateUserModel, deleteUserModel} = require("../models/User.js");

const getUser = (req, res) => {
    const user = getUserModel(req.params.id);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

const createUser = (req, res) => {
    const user = createUserModel(req.params.user_name, req.params.email, req.params.password);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

const updateUser = (req, res) => {
    const user = updateUserModel(req.params.user_name, req.params.email, req.params.password, req.params.id);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

const deleteUser = (req, res) => {
    const user = deleteUserModel(req.params.id);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

module.exports = {getUser, createUser, updateUser, deleteUser}