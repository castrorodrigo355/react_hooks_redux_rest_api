// Requiero dotenv
// require("dotenv").config();
const express = require("express"); // Requerir express
const path = require("path"); // ...
const morgan = require("morgan"); // Middleware urls req
const cors = require("cors"); // Para servidores ...
const app = express(); // Inicializacion de la aplicacion

app.set("port", process.env.PORT || 3000); // Asignacion del puerto
app.use(morgan("dev")); // Middleware informante de las url solicitadas
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Routes (Para las distintas rutas...)
app.use("/api/students", require("./routes/routesStudents"));

app.listen(app.get("port"), () => {
    console.log("Servidor en puerto ", app.get("port"));
});