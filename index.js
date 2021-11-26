
//impartanddo express
// 1. Importar el modulo http
import Express from 'express';
import http from "http"
/*Datos
Instituto  Tecnologico Gustavo A. Madero
CEO: Ivan Rivalcoba
26/11/2021
S04E01 💯 Cloud Server
Carlos Hernandez Martinez 
*/

//variables
const PORT = 5000;
const IP = '0.0.0.0';

const app = Express();

app.use(Express.urlencoded({ extended: false }));

app.use((req, _, next) => {
  console.log(`Se ha realizado la peticion: "${req.method}: ${req.path}"`);
  next();
});
app.use('/author', (_, res) => {
  res.send(`<h1>Carlos Hernandez Martinez </h1>
    <h1>Programacion Web en pila completa 1 </h1>
    <h1>S04E01 💯 Cloud Server</h1>`);
});


app.use(['/', '/home'], (_, res) => {
  res.send(`
  <h1>Temperatura</h1>
   <h1>Conservador de grados</h1>
     
    `);
});

// poniendo a escuchar la aplicacion de express
app.listen(PORT, IP, () => {
  console.log(' Servidor  escuchando en http://0.0.0.0:5000');
});
