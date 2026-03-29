const express = require("express");
const router = express.Router();

const data = require("../data/infographics.json");

router.get("/:id", (req, res) => {
    const item = data.find(i => i.id === req.params.id);
    res.render("infographic", { data, item });
});

module.exports = router;