const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const {User} = require('./models/User');

//applcation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
//applcation json
app.use(bodyParser.json());


const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log('Mongo DB...'))
.catch(err => console.log(err))



 

app.get('/', (req, res)=>res.send('Hello world11'));

app.post('/register', (req, res)=>{
    //회원가입할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body);
    user.save((err, userInfo)=>{
        if(err)return res.json({sucess : false, err})
        return res.status(200).json({
            sucess : truep
        })
    });
});

app.listen(port, () => console.log(`포트번호 : ${port}`));