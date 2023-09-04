const Item = require("../../models/Item");

module.exports = {
  index,
  show,
  newItem,
  edit,
};

async function index(req, res) {
  try {
    const items = await Item.find({}).sort("name").populate("category").exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function newItem(req, res) {
  try {
    res.render("New");
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

async function edit(req, res) {
  try {
    const foundItem = await Item.findById(req.params.id);
    res.render("Edit", {item: foundItem})
    // res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
