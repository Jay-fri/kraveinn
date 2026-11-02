import { useState, type ReactNode } from "react";
import logo from "../assets/kraveinn-logo.png";
import footerLogo from "../assets/kraveinn-footer-logo.svg";
import loadedFries from "../assets/menu/savoury/loaded-fries.png";
import burgerFries from "../assets/menu/savoury/burger-fries.png";
import burgerSpecial from "../assets/menu/savoury/burger-special.png";
import friesMeal from "../assets/menu/savoury/fries-meal.png";
import leftDroplet from "../assets/menu-left-droplet.svg";
import rightDroplet from "../assets/menu-right-droplet.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export type MenuItem = {
  name: string;
  description: string;
  rating: string;
  time: string;
  price?: string;
  image?: string;
};

type MenuGroup = { title: string; items: MenuItem[] };

const menuGroups: MenuGroup[] = [
  {
    title: "Savoury",
    items: [
      {
        name: "Loaded Fries",
        description: "Fries topped with chicken, sausages and sauces.",
        rating: "4.3",
        time: "15–20 min",
        price: "₦6,000",
        image: loadedFries,
      },
      {
        name: "Burger & Fries",
        description: "A burger served with a side of fries.",
        rating: "4.5",
        time: "15–18 min",
        price: "₦4,000",
        image: burgerFries,
      },
      {
        name: "Burger Special",
        description: "A burger served with fries, chicken, and a drink.",
        rating: "4.5",
        time: "20–25 min",
        price: "₦8,000",
        image: burgerSpecial,
      },
      {
        name: "Fries Meal",
        description:
          "3 chicken drumsticks served with fries, a side, and sauce.",
        rating: "4.0",
        time: "20–30 min",
        price: "₦6,000",
        image: friesMeal,
      },
      {
        name: "Shawarma",
        description: "A wrap filled with meat, vegetables, and sauce.",
        rating: "4.6",
        time: "15–20 min",
        price: "₦5,000",
      },
      {
        name: "Pizza Thursday",
        description: "Pizza available on Thursdays.",
        rating: "4.7",
        time: "20–25 min",
      },
    ],
  },
  {
    title: "Treats",
    items: [
      {
        name: "Ice cream",
        description: "Rich ice cream served in a cup.",
        rating: "4.6",
        time: "15 min",
        price: "₦2,500",
      },
      {
        name: "Fruit Parfait",
        description: "Layers of fresh fruit, yoghurt, and granola.",
        rating: "4.2",
        time: "10–15 min",
        price: "₦4,000",
      },
      {
        name: "Sliced Cake",
        description: "Delicious slice of freshly baked cake.",
        rating: "4.6",
        time: "10 min",
        price: "₦3,000",
      },
      {
        name: "Cake Parfait",
        description: "Layered cake and cream served in a cup.",
        rating: "4.7",
        time: "10–15 min",
        price: "₦3,000",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Lemon Iced Tea",
        description: "Chilled tea flavoured with lemon.",
        rating: "4.0",
        time: "10 min",
        price: "₦1,500",
      },
      {
        name: "Passion Fruit Tea",
        description: "Chilled tea flavoured with passion fruit.",
        rating: "4.1",
        time: "10 min",
        price: "₦2,500",
      },
      {
        name: "Slush",
        description: "A refreshing icy flavored drink.",
        rating: "4.8",
        time: "10 min",
        price: "₦2,000",
      },
      {
        name: "Brown Sugar Boba",
        description: "Milk tea with brown sugar syrup and tapioca pearls.",
        rating: "4.2",
        time: "10–15 min",
        price: "₦4,000",
      },
      {
        name: "Berry Matcha Boba",
        description: "Matcha, strawberry milk and tapioca pearls.",
        rating: "4.3",
        time: "10–15 min",
        price: "₦4,500",
      },
    ],
  },
];

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      {children}
    </svg>
  );
}
const Heart = () => (
  <Icon>
    <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z" />
  </Icon>
);

export function MenuCard({ item }: { item: MenuItem }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <article className="menu-card">
      <div className="menu-card-image">
        {item.image && <img src={item.image} alt="" />}
        <button
          className={isFavorite ? "is-favorite" : ""}
          onClick={() => setIsFavorite((value) => !value)}
          aria-label={`${isFavorite ? "Remove" : "Add"} ${item.name} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}>
          <Heart />
        </button>
      </div>
      <div className="menu-card-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-card-meta">
          <span>★ {item.rating}</span>
          <span>◷ {item.time}</span>
        </div>
        {item.price ? (
          <div className="menu-card-bottom">
            <strong>{item.price}</strong>
            <button aria-label={`Add ${item.name}`}>+</button>
          </div>
        ) : (
          <b className="coming-soon">Coming soon</b>
        )}
      </div>
    </article>
  );
}

function MenuFooter() {
  return (
    <footer className="menu-footer">
      <img src={footerLogo} alt="KraveInn" />
      <p>
        Good food, tasty treats, and refreshing drinks to
        <br />
        always satisfy your cravings.
      </p>
      <div className="menu-socials">
        <i>f</i>
        <i>◎</i>
        <i>✉</i>
        <i>◉</i>
      </div>
      <div className="menu-footer-links">
        <div>
          <b>Links</b>
          <a>Home</a>
          <a>Our Menu</a>
          <a>Orders</a>
          <a>Track Order</a>
        </div>
        <div>
          <b>Support</b>
          <a>Contact Us</a>
          <a>FAQs</a>
          <a>Delivery Info</a>
          <a>Help</a>
        </div>
      </div>
      <div className="menu-legal">
        <b>Legal</b>
        <span>Privacy Policy　 Terms &amp; Conditions　 Refund Policy</span>
      </div>
      <small>©2026 KraveInn. All rights reserved.</small>
    </footer>
  );
}

export default function MenuPage({ onCart, onSearch }: { onCart: () => void; onSearch: () => void }) {
  return (
    <main className="site-shell menu-page">
      <Navbar onCart={onCart} onSearch={onSearch} cartCount={3} />
      <section className="menu-hero">
        <img className="menu-droplet-left" src={leftDroplet} alt="" />
        <div>
          <h1>Our Menu</h1>
          <p>Freshly made. Always satisfying</p>
        </div>
        <img className="menu-droplet-right" src={rightDroplet} alt="" />
      </section>
      <nav className="menu-tabs" aria-label="Menu categories">
        <button className="active">All</button>
        <button>Savoury</button>
        <button>Treats</button>
        <button>Drinks</button>
      </nav>
      <div className="menu-groups">
        {menuGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            <div className="menu-grid">
              {group.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
