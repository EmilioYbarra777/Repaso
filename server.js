const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get(["/", "/:nombre"], (req, res) => {
  greeting = "<h1>Hello World. I'm Node App</h1>";
  nombre = req.params["nombre"];
  if (nombre) {
    res.send(greeting + "</br>And my name is " + nombre);
  } else {
    res.send(greeting);
  }
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`));