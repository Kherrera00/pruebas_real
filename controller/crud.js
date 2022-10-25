const conexion = require('../modul/database/db');

exports.save = (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const cargo = req.body.cargo;
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;
  console.log(nombre + " - " + apellido + " - " + cargo + " - " + usuario + " - " + contrasena);

  conexion.query('INSERT INTO usuario SET ?', {nombre:nombre, apellido:apellido, cargo:cargo, usuario:usuario,contrasena:contrasena},
   (error, results) => {
    if(error){
      console.log(error);
    }else {
      res.redirect('/');
    }
  })
}
