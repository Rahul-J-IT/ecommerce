const express=require('express')
const { model } = require('mongoose')
const app=express()
const products=require('./routes/product')
const  auth = require('./routes/auth')
const errorMiddleware = require('./middlewares/error')


app.use(express.json())
app.use('/api/v1/',products)
app.use('/api/v1/',auth)


app.use(errorMiddleware)

module.exports=app