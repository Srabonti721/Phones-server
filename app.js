const express = require ("express");
const cors = require('cors')
const phones = require("./phones.json");
const app = express();
const port = 5000;


app.use(cors());

app.get('/', (req, res)=>{
res.send('hello i am form app. js')
})

app.get("/phones",(req,  res)=>{
res.send(phones)
})

app.get('/phones/:id',(req,res)=>{
    const id = req.params.id;
    const praseId = parseInt(id);
    console.log("this id for single phones ",id);
    const singlePhone = phones.find(phoneData=> phoneData.id === praseId) || {};
    res.send(singlePhone)
    
})


app.listen(port, ()=>{
    console.log(`this phone server is on port : ${port}`)
})