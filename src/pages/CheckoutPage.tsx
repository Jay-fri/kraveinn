import { useState } from 'react'
import Navbar from '../components/Navbar'
import burger from '../assets/products/classic-chicken-burger.png'
import stepTick from '../assets/checkout-step-tick.svg'
import deliveryIcon from '../assets/delivery-icon.svg'
import pickupIcon from '../assets/pickup-icon.svg'
import paymentRay from '../assets/checkout/payment-ray.svg'
import headset from '../assets/checkout/help-headset.svg'
import orderNote from '../assets/checkout/order-note.svg'
import importantIcon from '../assets/checkout/important.svg'
import kudaLogo from '../assets/checkout/kuda-logo.svg'
import accountUser from '../assets/checkout/account-user.svg'
import accountNumber from '../assets/checkout/account-number.svg'
import bankIllustration from '../assets/checkout/bank.svg'

const EditIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" /></svg>
const CopyIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="7" width="11" height="13" rx="2" /><path d="M5 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
const ArrowIcon = () => <svg viewBox="0 0 28 20" fill="none" stroke="currentColor" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 10h23M16 1l10 9-10 9" /></svg>
const OrderItem = () => <article className="checkout-order-item"><img src={burger} alt="Classic Chicken Burger" /><div><b>Classic Chicken…</b><span>₦4,500&nbsp; × 1</span></div><strong>₦4,500</strong></article>
const BankIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" /></svg>

function PaymentModal({ onClose }: { onClose: () => void }) {
  return <div className="payment-overlay" role="dialog" aria-modal="true" aria-labelledby="payment-title">
    <section className="payment-modal">
      <button className="payment-close" onClick={onClose} aria-label="Close payment modal">×</button>
      <div className="payment-hero-icon"><img className="payment-ray ray-one" src={paymentRay} alt="" /><img className="payment-ray ray-two" src={paymentRay} alt="" /><img className="payment-ray ray-three" src={paymentRay} alt="" /><img className="payment-ray ray-four" src={paymentRay} alt="" /><span><img src={bankIllustration} alt="" /></span></div>
      <h2 id="payment-title">Complete Your Payment</h2>
      <p>Transfer the amount below to the bank account<br />detailed here to complete your order.</p>
      <div className="payment-amount"><span>Amount to pay</span><b>₦9,000</b></div>
      <div className="bank-details"><div><img src={kudaLogo} alt="Kuda" /><p>Bank Name<b>Kuda Bank</b></p><button><CopyIcon />Copy</button></div><div><img src={accountUser} alt="" /><p>Account Name<b>Promise Osahenrumwen</b></p></div><div><img src={accountNumber} alt="" /><p>Account Number<b>3003365512</b></p><button><CopyIcon />Copy</button></div></div>
      <div className="payment-warning"><span><img src={importantIcon} alt="Important" /></span><p>Important: Transfer the exact amount and use<br />your order reference as the payment note.</p></div>
      <div className="order-reference"><span><img src={orderNote} alt="" /></span><p>Order Reference<b>#KRV-10245</b></p></div>
      <button className="paid-button">I’ve Made Payment <ArrowIcon /></button>
      <p className="payment-help"><img src={headset} alt="" />Need help? <button>Contact us</button></p>
    </section>
  </div>
}

export default function CheckoutPage({ onBack, onCart }: { onBack: () => void; onCart: () => void }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [delivery, setDelivery] = useState<'delivery' | 'pickup'>('delivery')
  return <main className="site-shell checkout-page"><Navbar variant="checkout" onBack={onBack} onCart={onCart} cartCount={3} /><section className="checkout-content"><h1>Checkout</h1><p className="checkout-intro">You’re just a few steps away from enjoying your favorites.</p><div className="checkout-steps"><span className="completed"><img src={stepTick} alt="" /><i>Cart</i></span><b /><span className="current">2<i>Checkout</i></span><b /><span>3<i>Confirmation</i></span></div><h2>Delivery Information</h2><div className="checkout-form"><label>Full Name <b>*</b><input /></label><label>Phone Number <b>*</b><input /></label><label>Delivery Address <b>*</b><input /></label><label>City / Area <b>*</b><input /></label><label>Delivery Instructions <em>(Optional)</em><textarea /></label></div><h2>Delivery Method</h2><div className="delivery-options"><button className={delivery === 'delivery' ? 'selected' : ''} onClick={() => setDelivery('delivery')}><img src={deliveryIcon} alt="" /><b>Home Delivery</b><small>Get your order delivered<br />to your location.</small>{delivery === 'delivery' && <i><img src={stepTick} alt="Selected" /></i>}</button><button className={delivery === 'pickup' ? 'selected' : ''} onClick={() => setDelivery('pickup')}><img src={pickupIcon} alt="" /><b>Pick Up</b><small>Collect your order<br />yourself.</small>{delivery === 'pickup' && <i><img src={stepTick} alt="Selected" /></i>}</button></div><div className="checkout-order-heading"><h2>Your Order</h2><button type="button" onClick={onCart}>Edit Cart <EditIcon /></button></div><div className="checkout-order"><OrderItem /><OrderItem /><OrderItem /></div><h2>Payment Method</h2><button className="bank-option"><BankIcon /><span><b>Bank Transfer</b><small>Pay directly from your bank.</small></span><i><img src={stepTick} alt="Selected" /></i></button><div className="price-summary"><h3>Price Summary</h3><div><span>Subtotal (3 items)</span><b>₦7,000</b></div><div><span>Delivery Fee</span><b>₦2,000</b></div><div><span>Discount</span><b>-　₦0</b></div><hr /><div className="price-total"><strong>Total</strong><strong>₦9,000</strong></div></div><button className="place-order" onClick={() => setModalOpen(true)}>Place order • ₦9,000</button></section>{modalOpen && <PaymentModal onClose={() => setModalOpen(false)} />}</main>
}
