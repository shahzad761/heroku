const { response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

  const pool = require('./dbcon')
const TodoController = require('./controllers/todoController')
app.use(bodyParser.json())

const todoController = new TodoController()

// Controllers open
//get Using controllers
app.get('/controlgetall', todoController.getAll)


//insert Using controllers
app.post('/controlinsert', todoController.createTask)


//Delete top most data Using controllers
app.delete('/controltopdelete', todoController.deleteTask)


//update data with ID Using controllers
app.post('/controlupdate', todoController.updateTask)

// Controllers close









//select with filter
app.get('/withfilter', async (req, response) => {

  let a= req.query.donevalue
  console.log (a)

    let ress = await pool.query('select * from public.todoList where done= $1',[a])
    console.log(ress)
    
    response.json({info: ress.rows})
})



//Get single task
app.get('/getone', async (req, response) => {
  
  let ress = await pool.query('select * from public.todoList where id= $1',[req.query.id])
  console.log(ress)
  
  response.json({info: ress.rows})
})

//get Count
app.get('/count', async (req, response) => {
  
  let ress = await pool.query("select   count(id) from public.todoList GROUP BY done  order by done ")
  let a = ress.rows[0]
  let b = ress.rows[1]
  let c = Math.abs(parseInt(a["count"])+parseInt(b["count"]))
  console.log("count"+ c)
  
  response.json({
    "Total": c,
    "Done": b["count"],
    "Pending": a["count"]
        

})
})

//create a new task
app.post('/NewTask', async (req, response) => {
  console.log(req.body)
  console.log(req.body.id)
  let ressult = await pool.query('insert into public.todoList (task,done) values ($1,$2)',[req.body.task, req.body.done])
  console.log (ressult)
  
  response.json({ "info":"Task Created" })
})

//Update Status
app.put('/updatedone', async (req, response) => {
  console.log(req.body)
  console.log(req.body.id)
  let ressult = await pool.query('update public.todoList set done=$1 where id = $2',[req.body.done, req.body.id])
  console.log (ressult)
  
  response.json({ "info":"Status updated" })
})
//select Task
app.put('/updatetask', async (req, response) => {
  console.log(req.body)
  console.log(req.body.id)
  let ressult = await pool.query('update public.todoList set task=$1 where id = $2',[req.body.task, req.body.id])
  console.log (ressult)
  
  response.json({ "info":"Task updated" })
})

//delete task
app.delete('/delete', async (req, response) => {
  console.log(req.body)
  console.log(req.body.id)
  let ressult = await pool.query('DELETE FROM public.todoList where id = $1',[req.body.id])
  console.log (ressult)
  
  response.json({ "info":"Record deleted" })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})