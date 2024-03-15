const express = require('express');
const fs = require('fs');

const app = express();
const port = 5003;

const resumeData = JSON.parse(fs.readFileSync('resume.json'));

app.get('/', (req, res) => {
    res.send('hello there');
});

app.get('/test', (req,res) => {
    res.send('<h1>Testing Page</h1>');
});

app.get('/resume', (req, res) => {
    res.json(resumeData);
});

app.get('/home/:num', (req, res) => {
    const num = parseInt(req.params.num);
    res.json({ data: num ** 2 });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

