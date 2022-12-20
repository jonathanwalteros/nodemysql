require ('dotenv').config()
const express=require('express')
const mysql=require('mysql2')
const myconn=require('express-myconnection')
const routes=require('./routes')
const cors=require('cors')

//config()


const app=express()
app.use(cors())

app.set('port',process.env.PORT_SERVER || 9000)

const dbOptions={
    host:process.env.DB_HOST || 'localhost',
    port:process.env.DB_PORT || '3306',
    user:process.env.DB_USER || 'root',
    password:process.env.DB_PWD || 'Juanita2012',
    database:process.env.DB_NAME || 'library'
}
/// middelwares-------
app.use(myconn(mysql,dbOptions,'single'))
app.use(express.json())/// formato de entrega


//// routes ---------
app.get('/',(req,res)=>{
    res.send('Welcome to my APP 2022')
 })

 app.use('/api',routes)
 

 app.listen(app.get('port'),()=>{
    console.log(`El puerto corre en: ${app.get('port')}`)
})