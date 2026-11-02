import { useState, type ReactNode } from "react";
import { categories, products } from "./data";
import logo from "./assets/kraveinn-logo.png";
import footerLogo from "./assets/kraveinn-footer-logo.svg";
import cartIcon from "./assets/cart.svg";
import heroBurger from "./assets/hero-burger.png";
import pizzaThursday from "./assets/pizza-thursday.png";
import classicCombo from "./assets/classic-combo.png";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import emptyCartIcon from "./assets/empty-cart.svg";
import clearCartBin from "./assets/clear-cart-bin.svg";
import cartClearButton from "./assets/cart-clear-button.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import CheckoutPage from "./pages/CheckoutPage";

const Icon = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    {children}
  </svg>
);

const Menu = () => (
  <Icon>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);
const Search = () => (
  <Icon>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Icon>
);
const Bag = () => <img src={cartIcon} alt="" />;
const Heart = () => (
  <Icon>
    <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z" />
  </Icon>
);
const Star = () => (
  <Icon>
    <path
      fill="currentColor"
      stroke="none"
      d="m12 3 2.55 5.17L20.25 9l-4.13 4.03.98 5.69L12 16.05l-5.1 2.67.98-5.69L3.75 9l5.7-.83L12 3Z"
    />
  </Icon>
);
const Arrow = () => (
  <Icon>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);
const Alarm = () => (
  <Icon>
    <circle cx="12" cy="13" r="7" />
    <path d="M12 9v4l-2.5 2M5 3 2.5 5.5M19 3l2.5 2.5M8 2 6 4M16 2l2 2" />
  </Icon>
);
const Phone = () => (
  <Icon>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.8 2.3Z" />
  </Icon>
);
const Mail = () => (
  <Icon>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);
const Instagram = () => (
  <Icon>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </Icon>
);
const TikTok = () => (
  <Icon>
    <path d="M14 4c.8 2.3 2.3 3.8 4.8 4.1v3.1c-1.8.1-3.4-.5-4.8-1.5v5.6a5.2 5.2 0 1 1-5.2-5.2c.4 0 .8 0 1.2.1v3.2a2.2 2.2 0 1 0 1 1.8V4h3Z" fill="currentColor" stroke="none" />
  </Icon>
);
const WhatsApp = () => (
  <Icon>
    <path d="M20 11.7a8 8 0 0 1-11.8 7l-4.2 1.1 1.2-4A8 8 0 1 1 20 11.7Z" />
    <path d="M9 8.2c.3-.7.5-.7.8-.7h.6c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5 0 .6l-.5.6c-.1.2-.2.3 0 .6.5.9 1.3 1.6 2.2 2.1.3.2.5.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.2.4.5 0 .7-.4 1.4-1 1.6-.5.2-1.2.3-2-.1-1-.4-2.5-1.5-3.5-3.3-.8-1.4-1-2.5-1-3.1 0-.4.1-.7.2-1Z" fill="currentColor" stroke="none" />
  </Icon>
);
const Back = () => <Icon><path d="m14 6-6 6 6 6" /></Icon>;
const Trash = () => <Icon><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5" /></Icon>;
const Coupon = () => <Icon><path d="M20 12a2 2 0 0 0-2 2v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2Z" /><path d="M12 7v10" strokeDasharray="2 2" /></Icon>;
const CartDrawing = () => <Icon><path d="M3 4h2l2.2 11h10.6l2-7H7.3" /><circle cx="9" cy="19" r="1" /><circle cx="17" cy="19" r="1" /><path d="M10 10h7M13.5 7v6" /></Icon>;

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <div className={`brand ${footer ? "brand-footer" : ""}`}>
      <img src={footer ? footerLogo : logo} alt="KraveInn" />
    </div>
  );
}

function Button({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button className={`pill-button ${className}`} onClick={onClick}>
      {children}
      <span className="arrow-circle">
        <Arrow />
      </span>
    </button>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="product-card">
      <button className="heart" aria-label={`Save ${product.name}`}>
        <Heart />
      </button>
      <img className="product-image" src={product.image} alt="" />
      <div className="product-content">
        <h3 className="font-extrabold text-[30px]">{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <span>
            <Star /> {product.rating}
          </span>
          <span>◷ {product.time}</span>
        </div>
        <div className="product-bottom">
          <strong>{product.price}</strong>
          <button className="plus" aria-label={`Add ${product.name}`}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      <button>View All</button>
    </div>
  );
}

function App() {
  const [page, setPage] = useState<'home' | 'menu' | 'cart' | 'search' | 'checkout'>('home');
  const showCart = page === 'cart';
  if (showCart) return <CartPage onBack={() => setPage('home')} onCheckout={() => setPage('checkout')} />;
  if (page === 'checkout') return <CheckoutPage onBack={() => setPage('cart')} onCart={() => setPage('cart')} />;
  if (page === 'menu') return <MenuPage onCart={() => setPage('cart')} onSearch={() => setPage('search')} />;
  if (page === 'search') return <SearchPage onCart={() => setPage('cart')} onSearch={() => setPage('search')} onMenu={() => setPage('menu')} />;
  return (
    <main className="site-shell">
      <Navbar onCart={() => setPage('cart')} onSearch={() => setPage('search')} cartCount={3} />

      <section className="hero-banner">
        <img
          className="hero-burger"
          src={heroBurger}
          alt="Electric bacon cheeseburger"
        />
        <div className="hero-copy">
          <small>GOOD FOOD.</small>
          <h1>
            YUMMY
            <br />
            <b>CRAVINGS.</b>
          </h1>
          <p>Freshly made, always delicious.</p>
          <Button onClick={() => setPage('menu')}>Explore Menu</Button>
        </div>
        <div className="slider-dots">
          <i className="active" />
          <i />
          <i />
          <i />
        </div>
      </section>

      <nav className="categories" aria-label="Food categories">
        {categories.map(([name, image]) => (
          <button key={name}>
            <span>
              <img src={image} alt="" />
            </span>
            {name}
          </button>
        ))}
      </nav>

      <section className="content-section popular">
        <SectionTitle>Popular Picks</SectionTitle>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="pizza-promo">
        <img src={pizzaThursday} alt="Gooey pepperoni pizza special" />
        <div>
          <small>SPECIAL OFFER</small>
          <h2>
            PIZZA
            <br />
            THURSDAY!
          </h2>
          <p>Pizza available every Thursday.</p>
          <button className="reminder-button">
            Remind Me <Alarm />
          </button>
        </div>
        <span className="pizza-rays" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </section>

      <section className="content-section special">
        <SectionTitle>Special Treats</SectionTitle>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="combo-promo">
        <img src={classicCombo} alt="Burger, fries and drink deal" />
        <div>
          <small>AMAZING OFFER</small>
          <h2>
            UP TO <b>15%</b>
            <br />
            OFF
          </h2>
          <p>on your first order</p>
          <Button>Order Now</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
