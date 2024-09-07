const Sequelize=require('sequelize');
const sequelize=require('./index');
const Expense=sequelize.define('expence-table',{
    expense:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
});
module.exports=Expense;