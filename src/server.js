const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');

const getConfigSwagger = require('utils/swagger.middleware');

router.use('/doc', swaggerUi.serve)
router.get('/doc', swaggerUi.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swagger.swaggerSortByHTTPRequest));

module.exports = router;