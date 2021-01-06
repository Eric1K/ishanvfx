
const express = require("express");
const app = express();
const ytdl = require("ytdl-core");



app.use(express.static("css"));
app.use(express.static("js"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

app.get("/index.html", (request, response) => {
  response.sendFile(__dirname + "/pages/index.html");
});

app.get("/work", (request, response) => {
  response.sendFile(__dirname + "/pages/work.html");
});

app.get("/work.html", (request, response) => {
  response.sendFile(__dirname + "/pages/work.html");
});

app.get("/clients", (request, response) => {
  response.sendFile(__dirname + "/pages/clients.html");
});

app.get("/clients.html", (request, response) => {
  response.sendFile(__dirname + "/pages/clients.html");
});

app.get("/contact", (request, response) => {
  response.sendFile(__dirname + "/pages/contact.html");
});

app.get("/contact.html", (request, response) => {
  response.sendFile(__dirname + "/pages/contact.html");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
