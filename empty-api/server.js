// npm start

import express from "express";
import { readFileSync } from "fs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/broken", (req, res) => {
  res.status(500).send("We broke :(");
});

let htmlFile = readFileSync("./code-in-code.html").toString();
app.get("/code-in-code", (req, res) => {
  res.status(200).send(htmlFile);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
