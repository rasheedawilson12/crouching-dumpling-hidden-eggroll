require("dotenv").config();
require("./database");

const Category = require("../../models/Category");
const Item = require("../../models/Item");

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: "Appetizers", sortOrder: 10 },
    { name: "Soups", sortOrder: 20 },
    { name: "House Specials", sortOrder: 30 },
    { name: "Entree", sortOrder: 40 },
    { name: "Kids", sortOrder: 50 },
    { name: "Sides & Add-Ons", sortOrder: 60 },
    { name: "Desserts", sortOrder: 70 },
    { name: "Drinks", sortOrder: 80 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Eggrolls (6)",
      image:
        "https://www.allrecipes.com/thmb/VC_25bp-2QJ9XjxRS8k0JLaPMKI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14704-best-egg-rolls-DDMFS-4x3-490f99efee9646c8b5de93b4e2f6f963.jpg",
      category: categories[0],
      price: 5.95,
    },
    {
      name: "Vegetable Spring Rolls (6)",
      image:
        "https://www.cilantroandcitronella.com/wp-content/uploads/2021/07/vegetable-spring-rolls-photo-735x1103.jpg",
      category: categories[0],
      price: 5.95,
    },
    {
      name: "Edamame",
      image:
        "https://www.acouplecooks.com/wp-content/uploads/2020/03/Edamame-Recipe-004.jpg",
      category: categories[0],
      price: 4.95,
    },
    {
      name: "Crab Rangoons (6)",
      image:
        "https://christieathome.com/wp-content/uploads/2022/04/Cran-Rangoon-6.jpg",
      category: categories[0],
      price: 6.95,
    },
    {
      name: "Dumplings (6)",
      image:
        "https://omnivorescookbook.com/wp-content/uploads/2023/05/230413_Chinese-Chicken-Dumplings_550.jpg",
      category: categories[0],
      price: 6.95,
    },
    {
      name: "Hot-N-Sour Soup",
      image:
        "https://www.recipetineats.com/wp-content/uploads/2019/02/Hot-and-Sour-Soup_1_6.jpg",
      category: categories[1],
      price: 5.95,
    },
    {
      name: "Egg Drop Soup",
      image:
        "https://www.bowlofdelicious.com/wp-content/uploads/2015/01/egg-drop-soup-square.jpg",
      category: categories[1],
      price: 5.95,
    },
    {
      name: "Wonton Soup",
      image:
        "https://www.recipetineats.com/wp-content/uploads/2016/09/Wontons_1-1.jpg",
      category: categories[1],
      price: 5.95,
    },
    {
      name: "Ramen",
      image:
        "https://www.justonecookbook.com/wp-content/uploads/2023/04/Spicy-Shoyu-Ramen-8055-I.jpg",
      category: categories[2],
      price: 9.95,
    },
    {
      name: "Peking Duck",
      image:
        "https://www.unileverfoodsolutions.co.id/dam/ufs-id/recipes/Peking%20Duck.jpg",
      category: categories[2],
      price: 15.95,
    },
    {
      name: "Spicy Red Curry",
      image:
        "https://sixhungryfeet.com/wp-content/uploads/2021/02/Thai-Red-Curry-with-Tofu-1.jpg",
      category: categories[2],
      price: 10.95,
    },
    {
      name: "Spicy Green Curry",
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2019/06/Thai-Green-Curry-square-FS.jpg",
      category: categories[2],
      price: 10.95,
    },
    {
      name: "Seafood Delight",
      image: "",
      category: categories[3],
      price: 55.95,
    },
    {
      name: "Moo Goo Gai Pan Chicken or Shrimp",
      image:
        "https://www.jocooks.com/wp-content/uploads/2021/05/moo-goo-gai-pan-1-14.jpg",
      category: categories[3],
      price: 10.95,
    },
    {
      name: "Sweet & Sour Chicken",
      image:
        "https://www.tasteandtellblog.com/wp-content/uploads/2015/06/Sweet-and-Sour-Chicken-Recipe-tasteandtellblog.com-1-new.jpg",
      category: categories[3],
      price: 11.95,
    },
    {
      name: "Sweet & Sour Pork",
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2021/01/Sweet-and-Sour-Pork-square-FS.jpg",
      category: categories[3],
      price: 10.95,
    },
    {
      name: "Sweet & Sour Shrimp",
      image:
        "https://thewoksoflife.com/wp-content/uploads/2022/03/sweet-sour-shrimp-10.jpg",
      category: categories[3],
      price: 15.95,
    },
    {
      name: "Seasame Chicken",
      image:
        "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg",
      category: categories[3],
      price: 11.95,
    },
    {
      name: "Seasame Tofu",
      image:
        "https://www.noracooks.com/wp-content/uploads/2020/07/IMG_3010.jpg",
      category: categories[3],
      price: 10.95,
    },
    {
      name: "Seasame Beef or Shrimp",
      image:
        "https://s23209.pcdn.co/wp-content/uploads/2016/03/IMG_5527edit.jpg",
      category: categories[3],
      price: 12.95,
    },
    {
      name: "Orange Chicken",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2018/01/Chinese-Orange-Chicken-2.jpg",
      category: categories[3],
      price: 11.95,
    },
    {
      name: "Orange Tofu",
      image:
        "https://theviewfromgreatisland.com/wp-content/uploads/2021/01/orange-tofu-13.jpg",
      category: categories[3],
      price: 10.95,
    },
    {
      name: "Orange Beef or Shrimp",
      image:
        "https://rasamalaysia.com/wp-content/uploads/2016/03/orange-beef-thumb.jpg",
      category: categories[3],
      price: 15.95,
    },
    {
      name: "Hamburger",
      image: "🍔",
      category: categories[4],
      price: 5.95,
    },
    {
      name: "Pizza",
      image: "🍕",
      category: categories[4],
      price: 4.95,
    },
    {
      name: "Hot Dog",
      image: "🌭",
      category: categories[4],
      price: 4.95,
    },
    {
      name: "Chicken Nuggets (5)",
      image: "🥔",
      category: categories[4],
      price: 5.95,
    },
    {
      name: "French Fries",
      image: "🍟",
      category: categories[5],
      price: 2.95,
    },
    {
      name: "Green Salad",
      image: "",
      category: categories[5],
      price: 3.95,
    },
    {
      name: "Fried Egg",
      image: "",
      category: categories[5],
      price: 0.95,
    },
    {
      name: "Boiled Egg",
      image: "",
      category: categories[5],
      price: 0.95,
    },
    {
      name: "Bacon",
      image: "",
      category: categories[5],
      price: 1.95,
    },
    {
      name: "Mochi Ice Cream (3)",
      image: "",
      category: categories[6],
      price: 4.95,
    },
    {
      name: "Matcha Tiramisu",
      image: "",
      category: categories[6],
      price: 5.95,
    },
    {
      name: "Moon Cake (2)",
      image: "",
      category: categories[6],
      price: 6.95,
    },
    {
      name: "Strawberry Shortcake",
      image: "",
      category: categories[6],
      price: 6.95,
    },
    { name: "Milk", image: "🥛", category: categories[7], price: 0.95 },
    { name: "Coffee", image: "☕", category: categories[7], price: 0.95 },
    { name: "Soda", image: "🥤", category: categories[7], price: 2.95 },
    { name: "Sake", image: "🍹", category: categories[7], price: 8.95 },
    { name: "Beer", image: "🍺", category: categories[7], price: 3.95 },
    { name: "Wine", image: "🍷", category: categories[7], price: 7.95 },
    { name: "Boba", image: "🍷", category: categories[7], price: 6.95 },
  ]);
  console.log(items);

  process.exit();
})();
