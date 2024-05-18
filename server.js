const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mrs_paquetes_db'
  });

// Conexión a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Ruta de ejemplo para obtener datos de la base de datos
app.get('/datos', (req, res) => {
  connection.query('SELECT * FROM tabla_ejemplo', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
