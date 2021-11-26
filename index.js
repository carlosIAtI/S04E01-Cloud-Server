
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
app.use('/about', (_, res) => {
  res.send('<h1>Peticion a ruta about</h1>');
});

app.use('/add-student-form', (_, res) => {
  res.send(`
  <form action="/add-student" method="POST">
  <label for="student-name">Student name</label>
  <input type="text" name="name" id="student-name">  
  <button type="submit">Add student</button>
  </form>
  `);
});

app.use('/add-student', (req, res, next) => {
  for (const prop in req.body) {
    console.log(`${prop}: ${req.body[prop]}`);
  }
  console.log(`🚩 Metodo: ${req.method}`);
  res.json(req.body);
});

app.use(['/', '/home'], (_, res) => {
  res.send('<h1>Hola Mundo!!</h1>');
});

// poniendo a escuchar la aplicacion de express
app.listen(PORT, IP, () => {
  console.log(' Servidor  escuchando en http://0.0.0.0:5000');
});
