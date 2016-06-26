//--------------Creacion Servidor--------------//
//Imports
var express= require('express');
var app= express();
var path = require('path');
//Asignacion Puerto
app.set('port',process.env.PORT || 3000);
//Para de directorios
//----------Directorio--------------//
app.use(express.static('public'));
app.get('/',function (req, res) {
    //Envia Una Pagina Html como respuesta
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //Envia un texto como Respuesta
    //res.send('Hollow Word Express');
});
app.listen(app.get('port'),function () {
    console.log('Express is ejecuting press Ctrol-C to terminate')
});