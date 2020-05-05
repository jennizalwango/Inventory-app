const express = require('express');
const mongoose = require('mongoose');

// connection to the database

mongoose.connect('mongodb://localhost/yourDatabaseName', {useNewUrlParser: true, useUnifiedTopology: true})






// module.exports = app;