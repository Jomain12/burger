const express = require("express");
const exphbs = require('express-handlebars');

const routes = require("./routes/route");

const port = process.env.port || 3000;
const app = express();

//configure express handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});