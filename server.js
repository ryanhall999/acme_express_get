const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const path = require("path");
const prods = require("./products.json");

app.get("/api/products", (req, res) => {
	db.readJSON(prods).then(res.send(prods));
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
