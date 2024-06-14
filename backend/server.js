const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

app.post("/submit-proof", (req, res) => {
  const { proof, name, idNumber } = req.body;

  // .. handle proof submission ..

  res.send("Proof submitted successfully!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
