import type { ReactNode } from 'react'
import logo from '../assets/kraveinn-logo.png'
import cartIcon from '../assets/cart.svg'
import cartClearButton from '../assets/cart-clear-button.svg'

type NavbarProps = { onCart?: () => void; onSearch?: () => void; cartCount?: number; variant?: 'default' | 'cart'; onBack?: () => void; onClear?: () => void }
const Icon = ({ children }: { children: ReactNode }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
const MenuIcon = () => <Icon><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
const SearchIcon = () => <Icon><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></Icon>
const BackIcon = () => <Icon><path d="m14 6-6 6 6 6" /></Icon>

export default function Navbar({ onCart, onSearch, cartCount = 0, variant = 'default', onBack, onClear }: NavbarProps) {
  if (variant === 'cart') return <header className="cart-topbar"><button className="cart-nav-button" onClick={onBack} aria-label="Back to menu"><BackIcon /></button><h1>My Cart</h1>{onClear ? <button className="cart-nav-button cart-clear-button" onClick={onClear} aria-label="Clear cart"><img src={cartClearButton} alt="" /></button> : <span />}</header>
  return <header className="topbar"><button className="header-icon" aria-label="Open menu"><MenuIcon /></button><img className="navbar-logo" src={logo} alt="KraveInn" /><div className="header-actions"><button className="header-icon" onClick={onSearch} aria-label="Search"><SearchIcon /></button><button className="header-icon bag" onClick={onCart} aria-label="Basket"><img src={cartIcon} alt="" /><em>{cartCount}</em></button></div></header>
}
