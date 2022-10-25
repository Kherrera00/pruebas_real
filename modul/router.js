const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res) => {
  res.render("./view/index")
})

router.get('/', (req,res) => {
  res.render('index');
  conexion.query('SELECT * FROM usuario', (error,results) =>{
    if(error){
      throw error;
    }else {
      res.render('index', {results:results});
    } 
  });

});

const crud = require('../controller/crud');
router.post('/save', crud.save)

module.exports = router;