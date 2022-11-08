const { response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const pool = require('./dbcon')
app.use(bodyParser.json())

app.get('/', async (req, response) => {
  
    let ress = await pool.query('select * from public.todoList')
    console.log(ress)
    
    response.json({info: ress.rows})
})


app.post('/p', async (req, response) => {
  console.log(req.body)
  console.log(req.body.id)
  let ressult = await pool.query('insert into public.todoList (id,task,done) values ($1,$2,$3)',[req.body.id, req.body.task, req.body.done])
  console.log (ressult)
  
  response.json({ "info":"Task Created" })
})


app.put('/update', async (req, response) => {
  console.log(req.body)
  console.log(req.body.id)
  let ressult = await pool.query('update public.todoList set task=$1 where id = $2',[req.body.task, req.body.id])
  console.log (ressult)
  
  response.json({ "info":"Task Created" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})