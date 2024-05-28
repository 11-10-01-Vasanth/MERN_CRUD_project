const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("GET");
});

router.post("/post", (req, res) => {
  res.send("POST");
});

router.put("/update/:id", (req, res) => {
  res.send("UPDATE");
});

router.delete("/delete/:id", (req, res) => {
  res.send("DELETE");
});

module.exports = router;
