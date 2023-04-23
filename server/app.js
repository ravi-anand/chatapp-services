require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors');

const app = express();

app.use(express.json());
// enable cors
app.use(cors());
app.options('*', cors());
// importing user context
const User = require("./model/user");
const auth = require("./middleware/auth");
const routes = require('./routes');

app.use('/', routes);


module.exports = app;