export type Pizza = {
  name: string
  ingredients: string
  price: number
}

export const pizzas: Pizza[] = [
  {
    name: "Margherita",
    ingredients: "pomodoro, mozzarella",
    price: 5.50
  },
  {
    name: "Napoli",
    ingredients: "pomodoro, mozzarella, acciughe",
    price: 6.50
  },
  {
    name: "Romana",
    ingredients: "pomodoro, mozzarella, acciughe, olive, capperi",
    price: 7.50
  },
  {
    name: "Prosciutto",
    ingredients: "pomodoro, mozzarella, prosciutto cotto",
    price: 6.50
  },
]
