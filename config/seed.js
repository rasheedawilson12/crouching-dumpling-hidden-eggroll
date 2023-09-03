require("dotenv").config();
require("./databse");

const Category = require("../models/Category");
const Item = require("../models/Item");

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
      image:
        "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/yufegkzq/235b10ed-0f79-44f0-8bc2-13c8b2ae5ce2.jpg",
      category: categories[4],
      price: 5.95,
    },
    {
      name: "Pizza",
      image:
        "https://www.maryspizzashack.com/wp-content/uploads/webres_MarysPizzaShack_Kids_CheesePizza.jpg",
      category: categories[4],
      price: 4.95,
    },
    {
      name: "Hot Dog",
      image:
        "https://www.factsjustforkids.com/wp-content/uploads/homemade-hot-dog.png",
      category: categories[4],
      price: 4.95,
    },
    {
      name: "Chicken Tenders (3)",
      image:
        "https://www.lasfloresmex.com/wp-content/uploads/2020/03/ckicken-fingers.jpg",
      category: categories[4],
      price: 5.95,
    },
    {
      name: "French Fries",
      image:
        "https://www.dinneratthezoo.com/wp-content/uploads/2019/12/homemade-french-fries-5-500x500.jpg",
      category: categories[5],
      price: 2.95,
    },
    {
      name: "Green Salad",
      image:
        "https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/bltab5883aa7c01bc07/60ca61d8e1b3f7481347cc1f/Garden_Side_Salad.jpg",
      category: categories[5],
      price: 3.95,
    },
    {
      name: "Fried Egg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Fried_Egg_2.jpg",
      category: categories[5],
      price: 0.95,
    },
    {
      name: "Boiled Egg",
      image:
        "https://www.seriouseats.com/thmb/T5v_t4ZE06pasVLee8VYwkoG9Ec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-soft-boiled-eggs-hero-05_1-7680c13e853046fd90db9e277911e4e8.JPG",
      category: categories[5],
      price: 0.95,
    },
    {
      name: "Bacon",
      image:
        "https://www.saltandlavender.com/wp-content/uploads/2020/03/oven-bacon-2.jpg",
      category: categories[5],
      price: 1.95,
    },
    {
      name: "Mochi Ice Cream (3)",
      image:
        "https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-033.jpg",
      category: categories[6],
      price: 4.95,
    },
    {
      name: "Matcha Tiramisu",
      image:
        "https://www.ohhowcivilized.com/wp-content/uploads/2013/06/0613-matcha-green-tea-tiramisu-matchamisu-1.jpg",
      category: categories[6],
      price: 5.95,
    },
    {
      name: "Moon Cake (2)",
      image:
        "https://images.getrecipekit.com/20221128194311-how-to-make-chinese-mooncake.jpg?aspect_ratio=16:9&quality=90&",
      category: categories[6],
      price: 6.95,
    },
    {
      name: "Strawberry Shortcake",
      image:
        "https://zhangcatherine.com/wp-content/uploads/2020/06/12001200.jpg",
      category: categories[6],
      price: 6.95,
    },
    {
      name: "Milk",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg?quality=90&resize=556,505",
      category: categories[7],
      price: 0.95,
    },
    {
      name: "Coffee",
      image:
        "https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Cup-Of-Creamy-Coffee-500x500.png",
      category: categories[7],
      price: 0.95,
    },
    {
      name: "Soda",
      image:
        "https://olo-images-live.imgix.net/b4/b4da698424b74015a54bbd09c0fefddc.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=b116205288f74b2f3181036ab8600823",
      category: categories[7],
      price: 2.95,
    },
    {
      name: "Boba Tea",
      image:
        "https://www.thespruceeats.com/thmb/_x5cGFh26Ecf32WFCyql4y9OLaA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-bubble-tea-766451-hero-01-a6dca4dd096a4d8abdde1a754766f851.jpg",
      category: categories[7],
      price: 6.95,
    },
    {
      name: "Sake",
      image:
        "https://www.realsimple.com/thmb/1zW2bEiO2AHUtEfGmEvpL2X2_0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sake-2000-b6b5005ff0f249ee889df759a1d5d123.jpg",
      category: categories[7],
      price: 8.95,
    },
    {
      name: "Beer",
      image:
        "https://www.foodandwine.com/thmb/puxKSLPJltmTj9e6Bp-S-tfH8Bs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/What-Makes-Light-Beer-Different-From-All-Other-Beer-FT-BLOG0523-061773bd513b420ba0eef5f22267e2ac.jpg",
      category: categories[7],
      price: 3.95,
    },
    {
      name: "Wine",
      image:
        "https://www.foodandwine.com/thmb/XfK6F3pSwyoBBFkBYI3678Q4K5E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chillable-Summer-Reds-FT-BLOG0823-d544f2f496404f199055e1e1043dfb97.jpg",
      category: categories[7],
      price: 7.95,
    },
  ]);
  console.log(items);

  process.exit();
})();
