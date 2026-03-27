const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.json());

app.use("/", require("./routes/index"));
app.use("/infographic", require("./routes/infographic"));

app.listen(3000);