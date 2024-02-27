/**
 * Importation de express
 */

const express = require('express');


/**
 * Importation de swagger
 * */
// const swaggerUi = require('swagger-ui-express');
// const getConfigSwagger = require('../src/utils/swagger.js');


/**
 * Importation des routes
 */
const bookRouter = require('../src/routes/bookRouter.js');

/**
 * Initialisation et configuration
 */
const server = express();
server.use(express.json());
server.set('json spaces', 2);

server.use('/books', bookRouter);


const port = Number(process.env.PORT || 3000)
server.listen(port)

// router.use('/doc', swaggerUi.serve)
// router.get('/doc', swaggerUi.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = server;