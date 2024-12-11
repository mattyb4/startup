const express = require('express');

const app = express();

let searches = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);



app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


var testdata = {test:"testdata"};
apiRouter.get('/test', (_req, res) => {
    console.log("In test");
    res.send(testdata);
});

apiRouter.get('/search', (_req, res) => {
    res.send(searches);
});