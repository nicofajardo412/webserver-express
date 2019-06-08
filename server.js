const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Nicolas',

    }); //send identifica que es un objeto y lo imprime en formato JSON

});

app.get('/about', (req, res) => {
    res.render('about', {}); //send identifica que es un objeto y lo imprime en formato JSON
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});