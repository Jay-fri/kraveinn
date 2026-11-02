import categoryBurger from './assets/categories/burger.png'
import categoryPizza from './assets/categories/pizza.png'
import categoryFries from './assets/categories/fries.png'
import categoryDrinks from './assets/categories/drinks.png'
import categoryTreats from './assets/categories/treats.png'
import classicChickenBurger from './assets/products/classic-chicken-burger.png'
import pepperoniPizza from './assets/products/pepperoni-pizza.png'

/**
 * All temporary food imagery lives here. Replace any `image` value with your
 * production URL (or an imported local image) without touching the UI.
 */
export const images = {
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  pizza: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=85',
  drink: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=500&q=85',
  dessert: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=85',
  combo: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85',
} as const

export const categories = [
  ['Burger', categoryBurger],
  ['Pizza', categoryPizza],
  ['Fries', categoryFries],
  ['Drinks', categoryDrinks],
  ['Treats', categoryTreats],
] as const

export const products = [
  { name: 'Classic Chicken Burger', description: 'Juicy chicken, fresh lettuce, cheese & our signature sauce.', rating: '4.3', time: '15–20 min', price: '₦4,500', image: classicChickenBurger },
  { name: 'Pepperoni Pizza', description: 'Extra cheese, pepperoni & tomato sauce.', rating: '4.5', time: '20–25 min', price: '₦8,500', image: pepperoniPizza },
] as const

