//import mongoose module
import { connexion } from './connexion';
const mongoose = require('mongoose');
const {argv} = require('yargs');

const user = argv._[0];
const password = argv._[1];

//define use of promises
mongoose.Promise = global.Promise;

//define database connection
mongoose.connect(connexion);

//expose module
module.exports = {
    mongoose
};