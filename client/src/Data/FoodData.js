export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Vegetariana",
    img: "/image/menu-pizza-vegetariana.jpeg",
    section: "Pizza",
    price: 1.2,
  },
  {
    name: "Qauattro Formaggi",
    img: "/image/menu-pizza.jpeg",
    section: "Pizza",
    price: 1.5,
  },
  {
    name: "Salami",
    img: "/image/menu-pizza-eggs.jpeg",
    section: "Pizza",
    price: 1.7,
  },
  {
    name: "Burger",
    img: "/image/menu-burger.jpeg",
    section: "Sandwitch",
    price: 2.5,
  },
  {
    name: "Sandwitch",
    img: "/image/menu-sandwitch.jpeg",
    section: "Sandwitch",
    price: 2.7,
  },
  {
    name: "Tortila",
    img: "/image/menu-tortila.jpeg",
    section: "Sandwitch",
    price: 3,
  },
  {
    name: "Salad",
    img: "/image/menu-salad.jpg",
    section: "Salad",
    price: 2.8,
  },
  {
    name: "Chicken Salad",
    img: "/image/menu-chicken-salad.jpeg",
    section: "Salad",
    price: 3.7,
  },
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }

  res[food.section].push(food);
  return res;
}, {});
