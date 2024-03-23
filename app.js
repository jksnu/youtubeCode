const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./model');
const { errorHandler, applicationMiddleware } = require('./myMiddleware/customMiddleware');
const routes = require('./route/routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

(async () => {
  await db.sequelize.sync();
})();

// Built-in Middleware to parse JSON data in the request body
app.use(bodyParser.json());

//Using Third-party middleware function for logging
app.use(morgan('dev'));

// Application level middleware
app.use(applicationMiddleware);

// Use the routes in your app
app.use('/', routes);

//Using error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
