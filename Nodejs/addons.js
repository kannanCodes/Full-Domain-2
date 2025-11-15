// -----------------Validate specific header----------------

const express = require('express')
const app = express()

app.use((req,res,next)=>{
     if (req.headers['x-api-key'] !== '12345'){
          return res.status(401).send('Invalid API-KEY')
     }
     next()
})
app.get('/',(req,res)=>{
     res.send('Hello World')
})

app.listen(3000,()=>{
     console.log('server is running on http://localhost:3000')
})


//--------------------Rate Limiting--------------------------

import express from 'express'
import {rateLimit} from 'express-rate-limit'
const app = express();

const limit = rateLimit({
     windowMs : 1 * 60 * 1000,
     max: 5,
     message : 'Too many requests..Please try again'
})

app.use(limit)

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
