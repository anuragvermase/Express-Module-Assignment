const express = require('express') 
const app =express();

const port =3020;

app.get("/", (req,res)=>{
    res.json({ msg: 'I am homepage' });
});

app.get("/about", (req,res)=>{
    res.json({ msg: 'I am about page' });
});

app.get("/contact", (req,res)=>{
    res.json({ email: 'support@pwskills.com' });
});


app.listen(port,()=>{
    console.log(`server up and listen at Port : ${port}`);
});