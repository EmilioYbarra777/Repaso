const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/:name"], (req, res) => {
  greeting = "<h1>Hello World. I'm Node App</h1>";
  name = req.params["name"];
  if (name) {
    res.send(greeting + "</br>And my name is " + name);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));