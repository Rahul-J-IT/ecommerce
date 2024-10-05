const app=require('./app')
const dotenv=require('dotenv')
const path=require('path')
const connectDatabase = require('./config/database')

dotenv.config({path:path.join(__dirname,'config/.env')})
connectDatabase()
app.listen(process.env.PORT,()=>{
    console.log(`server runnning in port :${process.env.PORT} in ${process.env.NODE_ENV}`)
})

