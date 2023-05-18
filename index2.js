const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

const fs = require('fs');
const mustache = require('mustache');

// Read the HTML template file
const template = fs.readFileSync('path/to/template.html', 'utf8');
const data = {
    name: 'John Doe',
    age: 30,
    // Add more parameters as needed
};
const rendered = mustache.render(template, data);

app.get('/home', (req, res) => {
// Example: Send the rendered HTML as the response
res.send(rendered);

})


app.listen(8080, () => {
    console.log('Server listening on port 8080')
})