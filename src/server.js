const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb+srv://Leo:leo@cluster0-7va17.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes'));

app.listen(3333);