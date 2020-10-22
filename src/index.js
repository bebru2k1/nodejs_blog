const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const router = require('./routes');
const db = require('./config/db');

//DB connect
db.connect();

// app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//Template Engime
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoursces/views'));

// route
router(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
