const express = require('express');

const exphbs = require('express-handlebars');

const bookapp = express();

bookapp.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));

bookapp.set('view engine','handlebars');

bookapp.use(express.static('public'));

const port = process.env.PORT || 4000;

bookapp.get('/',(req,res) => {
    res.render('home');
});

/* bookapp.get('/about',(req,res) =>{
    res.render('about');
})

bookapp.get('/contact',(req,res) =>{
    res.render('contact');
}) */

bookapp.listen(port,()=>{
    console.log('Server is running on port ' + port);
});