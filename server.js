const express = require('express');
const path = require('path')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('client/dist'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});