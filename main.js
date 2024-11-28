const express = require('express')

const app = express()

const port  = 5000

app.use(express.json())

var users = [
    {name : "Rania", age : 4, id : 1},
    {name : "Yessine", age : 14, id : 2},
    {name : "Yesser", age : 44, id : 3},
    {name : "Rahma", age : 20, id : 4},
    {name : "Mariem", age : 2, id : 5},
    {name : "Hadir", age : 62, id : 6},
]


//CRUD

//Read
app.get('/getUsers',(req,res)=>{
    res.send(users)
})


//Create
app.post('/addUser',(req,res)=>{
    users = [...users, req.body]
    res.send(users)
})


//Delete
app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params

    users = users.filter((el,i,t)=> el.id != id)

    res.send(users)
})


//Update
app.put('/UpdateUser/:id',(req,res)=>{
    const {id} = req.params

    users = users.map((el,i,t)=> el.id == id ?  {...el,...req.body} : el)

    res.send(users)
})



app.listen(port, console.log(`Server is running on the port ${port}`))