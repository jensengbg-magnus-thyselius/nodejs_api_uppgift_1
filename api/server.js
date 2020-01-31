
var express = require('express');
app = express();
port = 5050;
bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/routes');
routes(app);


app.listen(port);


console.log('API server started on: ' + port);


