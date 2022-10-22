const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const Port = 5000;
const catagory = require("./data/catagory.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/catagory", (req, res) => {
  res.send(catagory);
});

app.get("/catagory/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(Port, () => {
  console.log("server is running");
});
