import { useState } from 'react'
import { categories, products } from '../data'
import emptyCartIcon from '../assets/empty-cart.svg'
import clearCartBin from '../assets/clear-cart-bin.svg'
import Navbar from '../components/Navbar'

type CartEntry = { id: string; name: string; label: string; price: number; image?: string; coke?: boolean; quantity: number }

const initialCart: CartEntry[] = [
  { id: 'burger', name: 'Classic Chicken Burger', label: 'Regular', price: 4500, image: products[0].image, quantity: 1 },
  { id: 'fries', name: 'French Fries', label: 'Extras', price: 1500, image: categories[2][1], quantity: 1 },
  { id: 'coke', name: '500ml Coca Cola', label: 'Extras', price: 1000, coke: true, quantity: 1 },
]
const naira = (value: number) => `₦${value.toLocaleString('en-NG')}`
const Back = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m14 6-6 6 6 6" /></svg>
const Coupon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2Z" /><path d="M12 7v10" strokeDasharray="2 2" /></svg>

export default function CartPage({ onBack, onCheckout }: { onBack: () => void; onCheckout: () => void }) {
  const [items, setItems] = useState(initialCart)
  const [confirmClear, setConfirmClear] = useState(false)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = items.length ? 2000 : 0
  const changeQuantity = (id: string, amount: number) => setItems(current => current.flatMap(item => item.id !== id ? [item] : item.quantity + amount > 0 ? [{ ...item, quantity: item.quantity + amount }] : []))

  return <main className="site-shell cart-page">
    <Navbar variant="cart" onBack={onBack} onClear={items.length > 0 ? () => setConfirmClear(true) : undefined} />
    {items.length === 0 ? <section className="cart-empty"><img src={emptyCartIcon} alt="Empty shopping cart" /><h2>Add items to start a cart</h2><p>Once you add items from the menu,<br />your cart will appear here.</p><button onClick={onBack}>Explore Menu</button></section> : <section className="cart-content"><div className="cart-items">{items.map(item => <article className="cart-item" key={item.id}>{item.coke ? <span className="coke-can">Coke</span> : <img src={item.image} alt="" />}<div className="cart-item-copy"><h2>{item.name}</h2><p>{item.label}</p><strong>{naira(item.price)}</strong></div><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)} aria-label={`Reduce ${item.name}`}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} aria-label={`Increase ${item.name}`}>+</button></div></article>)}</div><div className="promo-code"><span><Coupon /> Promo code</span><button>Apply</button></div><div className="order-summary"><div><span>Subtotal</span><strong>{naira(subtotal)}</strong></div><div><span>Delivery</span><strong>{naira(delivery)}</strong></div><div className="summary-total"><span>Total</span><strong>{naira(subtotal + delivery)}</strong></div></div><button className="checkout-button" onClick={onCheckout}>Checkout • {naira(subtotal + delivery)}</button></section>}
    {confirmClear && <div className="cart-modal-layer" role="dialog" aria-modal="true" aria-labelledby="clear-cart-title"><div className="clear-cart-modal"><img className="clear-cart-bin" src={clearCartBin} alt="Trash bin" /><button className="modal-close" onClick={() => setConfirmClear(false)} aria-label="Close confirmation">×</button><h2 id="clear-cart-title">Are you sure?</h2><p>You’re about to clear your cart.<br />This action will remove all items<br />from your cart.</p><div><button className="cancel-clear" onClick={() => setConfirmClear(false)}>Cancel</button><button className="confirm-clear" onClick={() => { setItems([]); setConfirmClear(false) }}>Clear Cart</button></div></div></div>}
  </main>
}
