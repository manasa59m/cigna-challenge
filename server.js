const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  res.send({ express: "EXPRESS IS READY TO SERVE" });
});

app.get("/get-list", (req, res) => {
  fs.readFile("./data/data.json", (err, json) => {
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

app.get("/search-list/:searchTerm?", (req, res) => {
  fs.readFile("./data/data.json", (err, json) => {
    let obj = JSON.parse(json);
    const searchStr = req.params.searchTerm;
    let list = obj.results;
    if (searchStr !== undefined) {
      list = obj.results.filter(
        (x) =>
          x.name.toLowerCase().indexOf(searchStr.toLowerCase()) > -1 ||
          x.specialty.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
      );
    }
    res.json(list);
  });
});
