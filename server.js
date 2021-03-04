const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//middlewre

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/contactform.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
