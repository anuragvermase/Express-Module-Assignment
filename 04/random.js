const express = require('express');
const app = express();

const PORT = 3050;

app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random()*100);
    res.json({"random": randomNumber});
});

app.listen(PORT, ()=>{
    console.log(`server up and listen at PORT : ${PORT}`);
});