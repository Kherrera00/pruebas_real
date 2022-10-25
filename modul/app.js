const { json } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./router'));

app.use(express.urlencoded({extended:false}));
app.use(express(json));

app.listen(4000, ()=> {
  console.log('SERVER corriendo en http://localhost:4000');

});