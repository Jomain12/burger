const express = require("express");

const routes = require("./routes/route");

const port = process.env.port || 3000;
const app = express();

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});