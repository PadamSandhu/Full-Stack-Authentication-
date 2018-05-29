const express = require('express');
const bodyParser = require('body-parser');  // middleware in express
const morgan = require('morgan');          // middleware
const app = express();  // Instance of app
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:27017/auth');

//App Setup
app.use(morgan('combined'));            // Logging framework ( Mainly used for debugging)
app.use(bodyParser.json({type: '*/*'}));

router(app);



// Server Setup
const port = process.env.PORT || 3090;
app.listen(port, () => {
    console.log('Example app listening on port !', port);
});

//Run app, then load http://localhost:port in a browser to see the output...