const mysql = require('mysql');


const conexion = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'Admin12345',
  database: 'crearusuario'
});

conexion.connect((error) => {
  if(error) {
    console.error('El error de conexion es: ' +error);
    return
  }
  console.log('Conectado a la BD de Mysql');

});

module.exports = conexion;