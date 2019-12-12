const express = require("express");
const app = express();

app.use(express.json());

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on ${process.env.PORT || port}`);
});
