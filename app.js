const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

	res.send('YES SIR!! SERVER ALMOST DONE :) HTTPS and all');

});

app.get('/demo', (req, res) => {
	res.set('X-full-stack', '4life');
	res.status(418);
	res.send('I prefer coffee lol ');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
