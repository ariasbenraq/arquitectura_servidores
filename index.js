//Previamente debemos instalar las dependencias:
// npm install
// npm install express
// npm  i -D nodemon
// code .


// requerimos express
const express = require('express')
const app = express()


//app.use(express.urlencoded({extended: false})); // peticiones codificadas como formulario (x-form-urlencoded)
app.use(express.json());


// Definimos rutas
// Metodo get; recibe dos parametros
// Path donde escuchara la peticion, y una funcion que recibe tres objetos
// Objeto req = la peticion
// Objeto res = la respuesta generada
// el 3er parametro es una funcion.

// Como generamos respuestas desde una ruta o un controlador?
// Express es un framwork modelo - vista - controlador

//Framework controlador: Consiste en ir definiendo rutas a la que le asociamos una funcion
// Los controladores son enrutadores de codigo que se le asocia a un ruta, y evaluan algun dato de la peticion tomando parametros de la url o del body. 

// Como hacemos el renderizado de vista? el devolver un json?
// Se utilizara el objeto res


// ruta comodin :id whilecard
app.get('/users/:identifier/', (req, res) => {
    console.log("here I am at /");

    // Console.log de los query params
    console.log('query params', req.query);

    //Como puedo hacer que vengan parametros en el path?
    //Definiendo la ruta con parametros
    console.log('path params', req.params);

    //Quê otra forma tenemos de recibir dqtos del cliente?
    //En las cabeceras
    console.log("headers", req.headers)


    //El metodo send permitira enviar una respuesta
    //Con el objeto res, tambien podemos forzar el status "res.status"
    //con el metodo setHeader, podemos configurar una cabecera
    //Por controlador se puede enviar una respuesta

    // res.status(302);
    // res.setHeader("Location", "https://google.com");
    // res.send("<h3>hello</h3>"); 

    // res.redirect('https://google.com');

    // res.setHeader('Content-Type' , 'application/json');
    // res.send('{"foo" : "bar"}')

    // Podemos utilizar el metodo 'json'

    // res.json({foo:'bar'})
    res.status(404).json({ message: "not found" });

});

app.post('/users/:identifier/', (req, res) => {
    console.log("here I am at /");

    //parametros que puedo recibir del cliente 

    console.log('query params', req.query);
    console.log('path params', req.params); //parametros en la url
    console.log("headers", req.headers); //cabeceras
    console.log("body", req.body); //cuerpo del mensaje post, previamente debemos hacer un app.use(express.json) para que express sepa decodificar el body de las peticiones

    res.status(200).json({ message: "ping" });

});



app.get('/about', (req, res) => {

})

app.get('/posts', (req, res) => {

})

// Ponemos el puerto por defecto 8000, y luego una funcion a modo de call back que se ejecutarâ cuando la funcion este lista

app.listen(8000, () => {
    console.log('ready on port 8000')
})