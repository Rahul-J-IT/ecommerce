const express=require('express')
const { model } = require('mongoose')
const app=express()
const products=require('./routes/product')
const  auth = require('./routes/auth')
const order = require('./routes/order')
const errorMiddleware = require('./middlewares/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')


app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/v1/',products)
app.use('/api/v1/',auth)
app.use('/api/v1/',order)



app.use(errorMiddleware)

module.exports=app