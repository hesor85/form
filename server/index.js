const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/api/login', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send({})
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})