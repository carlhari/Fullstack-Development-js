const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({name: "carl"})
})


app.listen(3000, ()=> console.log('Listening 3000'))