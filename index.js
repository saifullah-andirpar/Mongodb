const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello')
})

PORT = process.env.PORT || 5003

app.listen(PORT,()=>{
    console.log (`running form ${PORT}`)
})