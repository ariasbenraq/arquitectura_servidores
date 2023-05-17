const express = require('express')
const app = express()

app.use(express.json());


app.use((req, res, next) => {
    console.log("here I am  at middleware");
    
    req.color = "red";
    next();
});

app.get('/users/:identifier/', (req, res) => {
    console.log("here I am at /");
    console.log('query params', req.query);
    console.log('path params', req.params);
    console.log("headers", req.headers)
    res.status(404).json({ message: "not found" });

});

app.post('/users/:identifier/', (req, res) => {
    console.log("body", req.body);
    res.status(200).json({ color: req.color });

});

app.listen(8000, () => {
    console.log('ready on port 8000')
})