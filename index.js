const express = require('express');
const phones = require('./phones.json')
const app = express();
const port = 5000;

app.get('/', (req,res)=>{
    res.send("hello this is ashs my phones server")
})

app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req,res)=>{
    const id =req.params.id;
    const parseId = parseInt(id);
    const phone = phones.find(phoneData=>phoneData.id === parseId) || {};
    res.send(phone)

})

app.listen(port, ()=>{
    console.log(`Phone server is running on port :${port}`);
})