const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const fs = require('fs')


const swagger = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Practice',
      version: '1.0.0',
    },
  },
  apis: ['./server.js'], 
};
const specs = swaggerJsdoc(options); 

// const swaggerJsonPath = path.join('/home/satyam/Desktop/Practice/','swagger.json');
// fs.writeFileSync(swaggerJsonPath, JSON.stringify(specs, null, 2));

swagger.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = swagger;
