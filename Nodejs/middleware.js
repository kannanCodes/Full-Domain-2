
//<-----[APPLICATION LEVEL MIDDLEWARE]----->

const express = require('express')
const app = express()

app.use((req,res,next)=>{
     console.log('Loggged in: ',Date().toString())
})
app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})


//<-----[ROUTER LEVEL MIDDLEWARE]----->

const express = require('express')
const app = express();
const router = express.Router()

router.use((req,res,next)=>{
     console.log(new Date().toString())
     next()
})

router.get('/user',(req,res)=>{
     res.send('User logged in ')
})

app.use('/',router)

app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`)
})

// <-------ERROR HANDLING MIDDLEWARE-------->

const express = require('express')
const app = express();

app.get('/',(req,res)=>{
     throw new Error('something went wrong!')    
})
app.use((err,req,res,next)=>{
     console.log(err)
     res.status(500).send('Something went wrong')
})
app.listen(3000,()=>{
    console.log(`server is running on http://localhost:3000`)
})


// <---------CUSTOM MIDDLEWARE-------->

import express from 'express'
const app = express();

app.use((req,res,next)=>{
     console.log(`${req.method}. ${req.url}`)
     next()
})

app.get('/',(req,res)=>{
     res.send('Hello World')
})

app.listen(3000,()=>{
     console.log(`server is running on http://localhost:3000`)
})
