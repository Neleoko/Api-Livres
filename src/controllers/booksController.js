const bookModel = require('../models/bookModel');

getAllBooks = (req, res) => {
    bookModel.getAllBooks((error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la recuperation des livres."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

getBookById = (req, res) => {
    bookModel.getBookById(req.params.id, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la recuperation d'un livre."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

addBook = (req, res) => {
    bookModel.addBook(new bookModel.booksConstructor(req.body), (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de l'ajout d'un livre."
            });
        } else {
            res.status(201).send(data);
        }
    });
}

modifyBook = (req, res) => {
    bookModel.modifyBook(req.params.id, new bookModel.booksConstructor(req.body), (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la moditication d'un livre."
            });
        } else {
            res.status(200).send(data);
        }
    });
}

deleteBook = (req, res) => {
    bookModel.deleteBook(req.params.id, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur survenue lors de la suppression d'un livre."
            });
        } else {
            res.status(200).send(data);
        }
    });
}
module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    modifyBook,
    deleteBook
}