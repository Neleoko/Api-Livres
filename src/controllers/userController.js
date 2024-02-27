const userModel = require('../models/userModel');

getAllUsers = (req, res) => {
    userModel.getAllUsers((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la recuperation des utilisateurs."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

getUserById = (req, res) => {
    userModel.getUserById(req.params.id, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la recuperation d'un utilisateur."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

addUser = (req, res) => {
    userModel.addUser(req.body, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de l'ajout d'un utilisateur."
            });
        } else {
            res.status(201).send(data);
        }
    });
}

modifyUser = (req, res) => {
    userModel.modifyUser(req.params.id, req.body, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la moditication d'un utilisateur."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

deleteUser = (req, res) => {
    userModel.deleteUser(req.params.id, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la suppression d'un utilisateur."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    modifyUser,
    deleteUser
};
