const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const equiposRouter = require('./routes/equipos');
const patrocinantesRouter = require('./routes/patrocinantes');
const categoriasRouter = require('./routes/categorias');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


const modalidadesRouter = require('./routes/modalidades');

app.use('/modalidades', modalidadesRouter);
app.use('/equipos', equiposRouter);
app.use('/patrocinantes', patrocinantesRouter);
app.use('/categorias', categoriasRouter);

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
module.exports = app;
