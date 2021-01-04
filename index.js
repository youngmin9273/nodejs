const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@root.jld0o.mongodb.net/root?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log('Mongo DB...'))
.catch(err => console.log(err))



 

app.get('/', (req, res)=>res.send('Hello world'));

app.listen(port, () => console.log(`포트번호 : ${port}`));