// <------FIND SUM USING QUERY------->

const express = require('express');
const app = express();

app.get('/api',(req,res)=>{
     const num1 = Number(req.query.num1)
     const num2 = Number(req.query.num2)

     const sum = (num1+num2)
     res.send(`Sum: ${sum}`)
})

app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})

// <------FIND SUM USING PARAMS------->

const express = require('express');
const app = express()

app.get('/api/:num1/:num2',(req,res)=>{
     
     const num1 = Number(req.params.num1)
     const num2 = Number(req.params.num2)

     const sum = num1+num2

     res.send(`Sum :${sum}`)
})

app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})

// <------ROUTER CHAINING------->

const express = require('express');
const router = express.Router();
const app = express()

router.route('/')
.get((req,res)=> res.send('Get request recieved'))
.post((req,res)=> res.send('Post request recieved'));

app.use('/',router)

app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})

//<-----EVENT EMITTER ----->

const eventEmitter = require('events')
const event = new eventEmitter()

event.on('greet',(name)=>{
     console.log('hello',name)
})

event.emit('greet','Kannan')