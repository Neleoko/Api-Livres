const client = require('../db/DB-connection');

/**
 * Constructeur de users
 * @param user
 * @constructor
 */
const usersConstructor = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.age = user.age;
}

/**
 * Récupérer tous les users
 * @param result
 */
getAllUsers = (result) => {
    client.query('SELECT * From "User"', async (err, res) => {
        result(err, res.rows)
    })
}

/**
 * Récupérer un user par son id
 * @param id
 * @param result
 */
getUserById = (id, result) => {
    client.query('SELECT * FROM "User" WHERE "ID" = $1', [id], async (err, res) => {
        result(err, res.rows)
    })
}

/**
 * Ajouter un user
 * @param user
 * @param result
 */
addUser = (user, result) => {
    client.query('INSERT INTO "User" ("Name", "Surname", "Age") VALUES ($1, $2, $3)', [user.name, user.surname, user.age], async (err, res) => {
        result(err, res)
    })
}

/**
 * Modifier un user
 * @param id
 * @param user
 * @param result
 */
modifyUser = (id, user, result) => {
    client.query('UPDATE "User" SET "Name" = $1, "Surname" = $2, "Age" = $3 WHERE "ID" = $4',
        [user.name, user.surname, user.age, id],
        async (err, res) => {
            result(err, res)
        })
}

/**
 * Supprimer un user
 * @param id
 * @param result
 */
deleteUser = (id, result) => {
    client.query('DELETE FROM "User" WHERE "ID" = $1', [id], async (err, res) => {
        result(err, res)
    })
}

module.exports = {
    usersConstructor,
    getAllUsers,
    getUserById,
    addUser,
    modifyUser,
    deleteUser
}