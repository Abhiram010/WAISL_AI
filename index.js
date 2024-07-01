const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello user");
})


app.get('/auth',(req,res)=>{
    res.send("Hello user");
})


const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("Listen at "+PORT)
})
