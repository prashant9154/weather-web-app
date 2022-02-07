const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 8000; // if when hosted it listen to specefic port and the default is 8000.

// public static path 
const staticPath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")


app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath)); // directly fetch index.html in public folder.


//routing
app.get('', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/weather', (req, res) => {
    res.render("weather");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('*', (req, res) => {
    res.render("404error", {
        errorMsg: 'Oops! Page Not Found' // this is a kind of props which is accessible in redered file ie. 404error.hbs
    });
});

app.listen(port, () => {
    console.log(`listing to the port ${port}`);
})