// Importamos Express
const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');


// Configurando ejs
app.set('view engine','ejs'); // Recordemos que express lo importa solo
app.set('views', path.join(__dirname,'/views')); // Definimos la ruta de mis views

// Configuramos nuestro body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Configuramos nuestro comment

const comments = [
    {
        id: uuidv4(),
        username: 'Andres',
        text: 'lol thats so funny'
    },
    {
        id: uuidv4(),
        username: 'Nora',
        text: 'Estas bella amiga'
    },
    {
        id: uuidv4(),
        username: 'Angue',
        text: 'Ahora soy paisa y que'
    },
    {
        id: uuidv4(),
        username: 'Fary',
        text: 'Me creo la monda y lo soy'
    },
    {
        id: uuidv4(),
        username: 'Pacho',
        text: 'Ey que tuyo, no sera tuyo'
    }
];

// Route to Display all comments
app.get('/comments',(req,res) =>{
    res.render('comments/index.ejs', {comments});

});

// Route to the form to create a new Comment
app.get('/comments/new', (req,res)=>{
    res.render('comments/new');
});
app.post('/comments', (req,res) =>{
    const {username, text} = req.body;
    comments.push({username, text});  
    res.redirect('/comments');
});

// Route to show comment Detail
app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find((c)=> c.id == id);
    res.render('comments/show',{id,comment})
});


app.listen(3000, ()=>{
    console.log('Server Listenign on port 3000 http://localhost:3000/');
})