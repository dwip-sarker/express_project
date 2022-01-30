// dependencies

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');

const router = require(path.join(__dirname, './routes/routes'));
// initilization
const app = express();
const port = 3000;

// app use
app.use(express.static(path.join(__dirname, './static/')));
app.use('/', router);

app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// app listing
app.listen(port, () => {
    console.log(`The blog app listing on localhost:${port}`);
});
