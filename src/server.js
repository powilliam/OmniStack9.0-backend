const express = require('express');
const cors = require('cors');
const Routes = require('./routes');

const dataBase = require('./mongoose');

const app = express();
app.use(cors());

dataBase.connectToMongoServer("mongodb+srv://customuser:senha@heaven-uc9c7.mongodb.net/semana09?retryWrites=true&w=majority");

app.use(express.json());
app.use(Routes);

app.listen(3333);