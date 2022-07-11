const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(8080, () => {
    console.log("App escuchando en puerto 8080");
});

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
})

// GET /sumar/5/6
app.get('/api/sumar/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send(JSON.stringify(parseInt(num1) + parseInt(num2)));
})

// GET /sumar?num1=5&num2=62
app.get('/api/sumar', (req, res) => {
    const { num1 } = req.query.num1;
    const { num2 } = req.query.num2;
    const suma =
        res.send(JSON.stringify(parseInt(num1) + parseInt(num2)));
});