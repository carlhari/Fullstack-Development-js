const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

app.get('/api',(req,res)=>{
    res.send('hello')
})


app.listen(3000, ()=> console.log('Listening 3000'))