const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

const pool = require('./dbcon')


app.get('/', async (req, response) => {
  
    let ress = await pool.query('select * from public.todoList')
    console.log(ress)
    
    response.json({info:'Node.js,Express,Express and Postgres API'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})