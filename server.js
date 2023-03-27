const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const routes = require('./Routes/Routesmanager');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/Test_MongoDB')
  .then(function(){
    console.log('Connected to MongoDB')
  }).catch(function(err){
    console.log('Error connecting to MongoDB'+ err)
  })
  
  app.engine('.hbs',handlebars.engine({
    extname:"hbs"
  }) );
  app.set('view engine', '.hbs');
  app.set('views', './views');

  app.use("/baiTap",routes)
  app.listen(port, function(){
    console.log('listening on port:' + port);
  });