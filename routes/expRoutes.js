const express=require('express');
const router=express.Router();
const ExpController=require('../controllers/expController');
router.post('/add-expense',ExpController.addExpense);
router.get('/expenses',ExpController.getExpense);
router.delete('/delete-expense',ExpController.deleteExpense);
module.exports=router;