const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "client", "dist")));

if (dev) {
  const webpackDev = require("./dev");
  app.use(webpackDev.comp).use(webpackDev.hot);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.post("/hello", (req, res) => {
  res.json({
    hello: "world"
  });
});
app.get("/hello/:name", (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Hello, ${name}!`
  });
});
app.listen(3000, function () {
  console.log("Server started on :3000");
});
