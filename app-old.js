const http = require('http');

//Escuchar peticiones http primero creamos el servidor

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'nicolas',
            edad: 24,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('escuchando elpuerto 8080');