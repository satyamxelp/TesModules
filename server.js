const express= require('express')
const app= express()
require('dotenv').config()
const sequelize= require('./Dbconfig')
const user= require('./schema')
const swagger= require('./swagger')
const swStats = require('swagger-stats');
const compression = require('compression');
const router= require('./Routes/router')
const controller = require('./Controller/controller')

const morgan = require('morgan');
app.use(morgan('combined'));





app.use(express.json())




const port= process.env.PORT;

app.use('/',router)


sequelize.sync(true)
  .then(() => {
    console.log('Database is connected');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });