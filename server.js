const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usabbbleRouter = require('./routes/usabbble')
const USABBBLE_LIST_PATH = '/usabbble';


mongoose.connect(process.env.MONGO_URI)

const main = () => {
  try {
    const app = express()
    const server = new http.Server(app)
    let port = process.env.PORT || 8000 
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    

    app.use((req, res, next) => {
      res.header('Acess-Control-Allow-Origin', '*')
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      )
      next()
    });

    app.use(USABBBLE_LIST_PATH, usabbbleRouter)
    
    server.listen(port, () => {
      console.log(`listening on ${port}...`)
    })
  }

  catch(error) {
    console.error(error)
  }
}

main();