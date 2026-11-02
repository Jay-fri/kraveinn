import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MenuCard } from './MenuPage'
import loadedFries from '../assets/menu/savoury/loaded-fries.png'
import burgerFries from '../assets/menu/savoury/burger-fries.png'
import burgerSpecial from '../assets/menu/savoury/burger-special.png'
import friesMeal from '../assets/menu/savoury/fries-meal.png'
import noResultsArt from '../assets/no-search-results.svg'

const results = [
  { name: 'Loaded Fries', description: 'Fries topped with chicken, sausages and sauces.', rating: '4.3', time: '15–20 min', price: '₦6,000', image: loadedFries },
  { name: 'Burger & Fries', description: 'A burger served with a side of fries.', rating: '4.5', time: '15–18 min', price: '₦4,000', image: burgerFries },
  { name: 'Burger Special', description: 'A burger served with fries, chicken, and a drink.', rating: '4.5', time: '20–25 min', price: '₦8,000', image: burgerSpecial },
  { name: 'Fries Meal', description: '3 chicken drumsticks served with fries, a side, and sauce.', rating: '4.0', time: '20–30 min', price: '₦6,000', image: friesMeal },
]

export default function SearchPage({ onCart, onSearch, onMenu }: { onCart: () => void; onSearch: () => void; onMenu: () => void }) {
  const [query, setQuery] = useState('Fries')
  const noResults = query.trim().toLowerCase() === 'waffles'
  return <main className="site-shell search-page"><Navbar onCart={onCart} onSearch={onSearch} cartCount={3} /><section className={`search-content ${noResults ? 'search-empty' : ''}`}><label className="search-input"><span>⌕</span><input value={query} onChange={event => setQuery(event.target.value)} aria-label="Search menu" /><button onClick={() => setQuery('')} aria-label="Clear search">×</button></label>{noResults ? <div className="no-results"><img src={noResultsArt} alt="Sad detective cheeseburger" /><h1>No Results Found</h1><p>We couldn’t find anything matching<br /><b>“Waffles”</b>. Try a different search or<br />browse our menu.</p><button onClick={onMenu}>Browse Our Menu <span>→</span></button></div> : <><div className="search-title"><div><h1>Search Results</h1><p>Showing results for <b>“Fries”</b></p></div><strong>4 results</strong></div><nav className="search-tabs"><button className="active">All</button><button>Savoury</button><button>Treats</button><button>Drinks</button></nav><div className="search-grid">{results.map(item => <MenuCard key={item.name} item={item} />)}</div></>}</section><Footer /></main>
}
