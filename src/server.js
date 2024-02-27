const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const getConfigSwagger = require('../src/utils/swagger.js');
const express = require('express');
const app = express()

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});


// router.get('/', aa = (send, res) => {
//     res.send('Hello World!')
// })

// router.use('/doc', swaggerUi.serve)
// router.get('/doc', swaggerUi.setup(getConfigSwagger.swaggerOptions, getConfigSwagger.swaggerSortByHTTPRequest))

module.exports = router;