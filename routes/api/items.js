const express = require("express");
const router = express.Router();
const itemsCtrl = require("../../controllers/api/items");

// GET /api/items
router.get("/", itemsCtrl.index);
// GET /api/items/:id
router.get("/:id", itemsCtrl.show);

router.get("/new", itemsCtrl.newItem);

router.get("/edit/:id", itemsCtrl.edit);

module.exports = router;
