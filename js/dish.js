// dishes.js

const meals = [
  // Супы
  {
    keyword: "kyrica",
    name: "Суп с курицей",
    price: 250,
    category: "soup",
    kind: "meat",
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/с курицей.png",
  },
  {
    keyword: "grib",
    name: "Грибной суп",
    price: 280,
    category: "soup",
    kind: "veg",
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/грибной.png",
  },
  {
    keyword: "tomato",
    name: "Томатный суп",
    price: 300,
    category: "soup",
    kind: "veg",
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/томатный.png",
  },
  {
    keyword: "borsh",
    name: "Борщ",
    price: 330,
    category: "soup",
    kind: "meat",
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/Борщ.png",
  },
  {
    keyword: "sheese",
    name: "Сырный суп",
    price: 350,
    category: "soup",
    kind: "veg",
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/сырный.png",
  },
  {
    keyword: "Uxa",
    name: "Уха",
    price: 250,
    category: "soup",
    kind: "fish",
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/уха.png",
  },

  // Главное блюдо
  {
    keyword: "ris",
    name: "Курица с рисом",
    price: 450,
    category: "main",
    kind: "meat",
    count: "400 гр",
    image: "/Users/karvanilla/Desktop/exam/web/images/рис.png",
  },
  {
    keyword: "karbonara",
    name: "Карбонара",
    price: 500,
    category: "main",
    kind: "veg",
    count: "350 гр",
    image: "/Users/karvanilla/Desktop/exam/web/images/карбонара.png",
  },
  {
    keyword: "file",
    name: "Соевое филе",
    price: 800,
    category: "main",
    kind: "veg",
    count: "300 гр",
    image: "/Users/karvanilla/Desktop/exam/web/images/филе.png",
  },
  {
    keyword: "paltus",
    name: "Палтус",
    price: 455,
    category: "main",
    kind: "fish",
    count: "300 гр",
    image: "/Users/karvanilla/Desktop/exam/web/images/палтус.png",
  },
  {
    keyword: "pig_meat",
    name: "Свиные ребра",
    price: 350,
    category: "main",
    kind: "meat",
    count: "300 гр",
    image: "/Users/karvanilla/Desktop/exam/web/images/ребра.png",
  },
  {
    keyword: "dorado",
    name: "Дорадо",
    price: 250,
    category: "main",
    kind: "fish",
    count: "300 гр",
    image: "/Users/karvanilla/Desktop/exam/web/images/дорадо.png",
  },

  // Салаты и стартеры
  {
    keyword: "saladwithytka",
    name: "Салат с уткой",
    price: 600,
    category: "salad",
    count: "280 г",
    image: "/Users/karvanilla/Desktop/exam/web/images/салутка.png",
    kind: "meat",
  },
  {
    keyword: "saladwithecrab",
    name: "Салат с крабом",
    price: 890,
    category: "salad",
    count: "350 г",
    image: "/Users/karvanilla/Desktop/exam/web/images/салкраб.png",
    kind: "meat",
  },
  {
    keyword: "saladavokado",
    name: "Салат с пюре авокадо",
    price: 450,
    category: "salad",
    count: "380 г",
    image: "/Users/karvanilla/Desktop/exam/web/images/авокадо.png",
    kind: "veg",
  },
  {
    keyword: "saladkrevetka",
    name: "Салат с креветками",
    price: 490,
    category: "salad",
    count: "200 г",
    image: "/Users/karvanilla/Desktop/exam/web/images/скреветкамми.png",
    kind: "fish",
  },
  {
    keyword: "fish_salad",
    name: "Рыбный салат",
    price: 290,
    category: "salad",
    kind: "fish",
    count: "250г",
    image: "/Users/karvanilla/Desktop/exam/web/images/рыбный.png",
  },
  {
    keyword: "greek_salad",
    name: "Греческий салат",
    price: 210,
    category: "salad",
    kind: "veg",
    count: "300г",
    image: "/Users/karvanilla/Desktop/exam/web/images/греческий.png",
  },

  // Десерты
  {
    keyword: "icecream",
    name: "Клубничное мороженое",
    price: 420,
    category: "dessert",
    count: "200 г",
    kind: "small",
    image: "/Users/karvanilla/Desktop/exam/web/images/морож.png",
  },
  {
    keyword: "sorbet",
    name: "Малиновый сорбет",
    price: 390,
    category: "dessert",
    count: "100 г",
    kind: "small",
    image: "/Users/karvanilla/Desktop/exam/web/images/сорбет.png",
  },
  {
    keyword: "3shocolate",
    name: "Торт 3 шоколада",
    price: 400,
    category: "dessert",
    count: "140 г",
    kind: "large",
    image: "/Users/karvanilla/Desktop/exam/web/images/3шоколада.png",
  },
  {
    keyword: "berries",
    name: "Клубника со сливками",
    price: 599,
    category: "dessert",
    kind: "medium",
    count: "300 г",
    image: "/Users/karvanilla/Desktop/exam/web/images/клубникасливки.png",
  },
  {
    keyword: "medovik",
    name: "Медовик",
    price: 350,
    category: "dessert",
    count: "300 г",
    kind: "large",
    image: "/Users/karvanilla/Desktop/exam/web/images/Снимок экрана 2024-11-01 в 03.34.34.png",
  },
  {
    keyword: "chocolate_mousse",
    name: "Шоколадный мусс",
    price: 150,
    category: "dessert",
    kind: "medium",
    count: "150г",
    image: "/Users/karvanilla/Desktop/exam/web/images/шокомусс.png",
  },

  // Напитки
  {
    keyword: "apelsin",
    name: "Сок апельсиновый",
    price: 70,
    count: "70 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/апельсиновыйсок.png",
    category: "drink",
    kind: "cold",
  },
  {
    keyword: "mohito",
    name: "Малиновый мохито",
    price: 180,
    count: "180 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/мохито.png",
    category: "drink",
    kind: "cold",
  },
  {
    keyword: "milk",
    name: "Клубничный милкшейк",
    price: 110,
    count: "200 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/милккокт.png",
    category: "drink",
    kind: "cold",
  },
  {
    keyword: "frappe",
    name: "Фраппе",
    price: 330,
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/фраппе.png",
    category: "drink",
    kind: "hot",
  },
  {
    keyword: "latte",
    name: "Латте",
    price: 350,
    count: "300 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/латте.png",
    category: "drink",
    kind: "hot",
  },
  {
    keyword: "espresso",
    name: "Эспрессо",
    price: 140,
    category: "drink",
    kind: "hot",
    count: "30 мл",
    image: "/Users/karvanilla/Desktop/exam/web/images/эсппрессо.png",
  },
];
