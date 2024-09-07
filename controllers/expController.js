const Expense=require('../models/user');
exports.addExpense=async(req,res)=>{
    const{expense,description,email}=req.body;
    try{
        const exp=await Expense.create({expense,description,email});
        res.status(201).json(exp);
    }catch(error){
        res.status(500).json({error:'Failed to add expense'});
    }
};

exports.getExpense=async(req,res)=>{
    try{
        const exps=await Expense.findAll();
        res.status(500).json(exps);
    }
    catch(error){
        res.status(500).json({error:'Failed to retrieve expenses'});
    }
};

exports.deleteExpense=async(req,res)=>{
    const{id}=req.params;
    try{
        const result=await UserActivation.destroy({where:{id}});
        if(result){
            res.status(200).json({message:'Expense Deleted'});
        }else{
            res.status(404).json({error:'Expense not found'})
        }
    }catch(error){
        res.status(500).json({error:'Failed to delete Expense'});
    }
};