export const foodItems = [
  {
    name: "Vegetariana",
    img: "/image/menu-pizza-vegetariana.jpeg",
    section: "Pizza",
  },
  {
    name: "Qauattro Formaggi",
    img: "/image/menu-pizza.jpeg",
    section: "Pizza",
  },
  {
    name: "Salami",
    img: "/image/menu-pizza-eggs.jpeg",
    section: "Pizza",
  },
  {
    name: "Burger",
    img: "/image/menu-burger.jpeg",
    section: "Sandwitch",
  },
  {
    name: "Sandwitch",
    img: "/image/menu-sandwitch.jpeg",
    section: "Sandwitch",
  },
  {
    name: "Tortila",
    img: "/image/menu-tortila.jpeg",
    section: "Sandwitch",
  },
  {
    name: "Salad",
    img: "/image/menu-salad.jpg",
    section: "Salad",
  },
  {
    name: "Chicken Salad",
    img: "/image/menu-chicken-salad.jpeg",
    section: "Salad",
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }

  res[food.section].push(food);
  return res;
}, {});
