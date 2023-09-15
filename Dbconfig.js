const Sequelize= require('sequelize')
const sequelize= new Sequelize('Assignment','root','satyam@99',{
  host: "localhost",
  dialect: "mysql",
  logging: false



})



module.exports= sequelize;