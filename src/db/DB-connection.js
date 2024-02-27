const {Client} = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})


client.connect()
    .then(() => {
        console.log('Connection a la BDD réussi')
    })
    .catch((e) => {
        console.log('Connection a la BDD échoué', e);
    });

module.exports = client;