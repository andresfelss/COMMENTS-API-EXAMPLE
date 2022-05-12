// Importamos Express
const express = require('express');
const app = express();
const path = require('path');

// Configurando ejs
app.set('view engine','ejs'); // Recordemos que express lo importa solo
app.set('views', path.join(__dirname,'/views')); // Definimos la ruta de mis views





app.listen(3000, ()=>{
    console.log('Server Listenign on port 3000 http://localhost:3000/');
})