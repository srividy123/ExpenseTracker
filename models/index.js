const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','Srikanth@123',{
    host:'localhost',
    dialect:'mysql'
});
module.exports=sequelize;