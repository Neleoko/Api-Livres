const client = require('../db/DB-connection');

/**
 * Constructeur de livre
 * @param book
 * @constructor
 */
const booksConstructor = function (book) {
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
    this.genre = book.genre;
}

/**
 * Récupérer tous les livres
 * @param result
 */
getAllBooks = (result) => {
    client.query('SELECT * From "Books"', async (err, res) => {
        result(err, res.rows)
    })
}

/**
 * Récupérer un livre par son id
 * @param id
 * @param result
 */
getBookById = (id, result) => {
    client.query('SELECT * FROM "Books" WHERE "ID" = $1', [id], async (err, res) => {
        result(err, res.rows)
    })
}

/**
 * Ajouter un livre
 * @param book
 * @param result
 */
addBook = (book, result) => {
    client.query('INSERT INTO "Books" ("Title", "Author", "Genre") VALUES ($1, $2, $3)', [book.title, book.author, book.genre], async (err, res) => {
        result(err, res)
    })
}

/**
 * Modifier un livre
 * @param id
 * @param book
 * @param result
 */
modifyBook = (id, book, result) => {
    client.query('UPDATE "Books" SET "Title" = $1, "Author" = $2, "Genre" = $3 WHERE "ID" = $4',
        [book.title, book.author, book.genre, id],
        async (err, res) => {
            result(err, res)
        })
}

/**
 * Supprimer un livre par son id
 * @param id
 * @param result
 */
deleteBook = (id, result) => {
    client.query('DELETE FROM "Books" WHERE "ID" = $1', [id], async (err, res) => {
        result(err, res)
    })
}

module.exports = {
    booksConstructor,
    getAllBooks,
    getBookById,
    addBook,
    modifyBook,
    deleteBook
}
