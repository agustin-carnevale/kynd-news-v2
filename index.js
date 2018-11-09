const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Routes
require('./routes/newsRoutes')(app);

app.get('/*',(req,res) =>{
    res.send("Welcome to KYDN =)");
});

app.listen(5000);