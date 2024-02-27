const router = require('express').Router();

const {
    getAllBooks,
    getBookById,
    addBook,
    modifyBook,
    deleteBook
} = require('../controllers/booksController');

router.get('/', getAllBooks);

router.get('/:id', getBookById);

router.post('/', addBook);

router.patch('/:id', modifyBook);

router.delete('/:id', deleteBook);

module.exports = router;
