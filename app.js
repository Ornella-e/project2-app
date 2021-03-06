// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

hbs.registerHelper("ifEquals", function (arg1, arg2, options) {
    return arg1 === arg2 ? options.fn(this) : options.inverse(this);
  });
  

hbs.registerPartials(__dirname + "/views/partials")

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalized = require("./utils/capitalized");
const projectName = "project2-app";

app.locals.appTitle = `${capitalized(projectName)} created with IronLauncher`;

const exposeUsers = require('./middlewares/exposeUsers');
app.use(exposeUsers);
//const isOwner = require('./middlewares/isOwner');
//app.use(isOwner);

// 👇 Start handling routes here
const index = require("./routes/index.routes");
app.use("/", index);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
