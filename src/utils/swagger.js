const swaggerJSDoc = require('swagger-jsdoc');

const swaggerGeneration = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'ApiBook',
            version: '0.1.0',
        },
        servers : [
            {
                url: 'http://localhost:8081/api/v1',
            }
        ]
    },
    apis: ['./src/routes/*.js'],
}

const swaggerOptions = swaggerJSDoc(swaggerGeneration);