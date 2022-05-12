// Importamos Express
const express = require('express');
const app = express();
const path = require('path');

// Configurando ejs
app.set('view engine','ejs'); // Recordemos que express lo importa solo
app.set('views', path.join(__dirname,'/views')); // Definimos la ruta de mis views

// Configuramos nuestro body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Configuramos nuestro comment

const comments = [
    {
        username: 'Andres',
        text: 'lol thats so funny'
    },
    {
        username: 'Nora',
        text: 'Estas bella amiga'
    },
    {
        username: 'Angue',
        text: 'Ahora soy paisa y que'
    },
    {
        username: 'Fary',
        text: 'Me creo la monda y lo soy'
    },
    {
        username: 'Pacho',
        text: 'Ey que tuyo, no sera tuyo'
    }
];

// Route to Display all comments
app.get('/comments',(req,res) =>{
    res.render('comments/index.ejs', {comments});

});




app.listen(3000, ()=>{
    console.log('Server Listenign on port 3000 http://localhost:3000/');
})