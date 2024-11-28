const express = require('express')

const app = express()

const port = 5000


// const Middleware =(req,res,next)=>{
//     console.log('Hadir')
//     next()
// }

// app.use(Middleware)

// app.get('/Sabat',(req,res)=>{
//     res.send('7ata chay')
// })

// app.get('/Balise',(req,res)=>{
//     res.send('<h1>Hadir</h1>')
// })

// app.get('/Rahma',(req,res)=>{
//     res.sendFile(__dirname+"/public/")
// })



app.use(express.static('public'))


app.get('/Rania',(req,res)=>{
    // console.log(__dirname)
    res.sendFile(__dirname+"/public/home.html")
})

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/public/style.css")
})



app.listen(port, console.log(`Server is running on the port ${port}`))