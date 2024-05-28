const express = require("express");

const app = express();

const PORT = 2001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.use(express.json());

app.use("/crud", require("./routes"));
