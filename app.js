const express=require('express');
const bodyParser=require('body-parser');
const Sequelize=require('./models/index');
const ExpRoutes=require('./routes/expRoutes');
const path=require('path');
const app=express();
app.use(bodyParser.json());
app.use('/api',ExpRoutes);
app.use(express.static(path.join(__dirname,'public')));
Sequelize.sync()
.then(()=>console.log('Database Connected'))
.catch(err=>console.log(err));
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));