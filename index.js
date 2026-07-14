const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req,res)=>{
    res.send("hello this is ashs my phones server")
})

app.listen(port, ()=>{
    console.log(`Phone server is running on port :${port}`);
})