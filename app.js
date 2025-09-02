const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const sist_embarcadosRouter = require("./routes/sist_embarcados");
app.use("/sist_embarcados", sist_embarcadosRouter);

const PWRouter = require("./routes/PW");
app.use("/PW", PWRouter);

const cad_usuarioRouter = require("./routes/cad_usuario");
app.use("/cad_usuario", cad_usuarioRouter);

const integrantesRouter = require("./routes/integrantes");
app.use("/integrantes", integrantesRouter);

// Start the server
app.listen(3000, () => {
  console.log("Servidor em execução - porta 3000");
});