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
    // const { name, email, password } = req.body;
    const user = createUserModel(req.body.user_name, req.body.email, req.body.password);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

const updateUser = (req, res) => {
    const user = updateUserModel(req.body.user_name, req.body.email, req.body.password, req.body.id);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

const deleteUser = (req, res) => {
    const user = deleteUserModel(req.body.id);
    if (!user) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(user);
    }
}

module.exports = {getUser, createUser, updateUser, deleteUser}