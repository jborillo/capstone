const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const DBRouter = require('./routes/db');
const router = require('./routes/db');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB db connected");
});

app.use('/shop-n-go', router);

app.listen(port, ()=>{
    console.log('Server is running in port: '+port);
})