const express = require('express');
const app = express();
const PORT =3010;

let counter = 0;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get the counter value
app.get('/', (req, res) => {
    res.json({ counter: counter });
});

// Route to increment the counter value
app.post('/increment', (req, res) => {
    counter += 1;
    res.json({ counter: counter });
});

// Route to decrement the counter value
app.post('/decrement', (req, res) => {
    counter -= 1;
    res.json({ counter: counter });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
