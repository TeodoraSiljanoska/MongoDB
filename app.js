const express = require('express');
const res= require('express/lib/response');
const app = express();


app.get('/', (req,res)=>{
    res.send("Ova e Get metoda")
})

app.post('/', (req,res)=>{
    res.send("Ova e Post metoda")
})

app.post('/random', (req,res)=>{
    res.send("Ova e Random Post metoda")
})





app.listen(4000)
