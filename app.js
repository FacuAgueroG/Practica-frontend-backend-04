require("dotenv").config()
const express = require("express");
const path = require("path");
const hbs = require("hbs")

const PORT = process.env.PORT || 3000;

const server = express();

const routeIndex = require("./routes/index");
const routeForms = require("./routes/forms");
const routeHealthPlans = require("./routes/healthplans");
const routeWorkInProgress = require("./routes/workinprogress");

server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: false }));

server.set("view engine", "hbs");
server.set("views", path.join(__dirname, "views"));

hbs.registerPartials(path.join(__dirname, "./views/partials"));



server.use("/", routeIndex);
server.use("/forms", routeForms);
server.use("/healthplans", routeHealthPlans);
server.use("/workinprogress", routeWorkInProgress);

server.listen(PORT, (err) => 
{
  err ? console.log("Error") : console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
