import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import { useState } from "react";
import "./Header.css";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-logo" onClick={closeMenu} aria-label="Portfolio home">
          <span className="site-logo__mark">P</span>
          <span>Portfolio</span>
        </NavLink>

        <button
          className="site-header__menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="primary-navigation" className={`site-nav ${isMenuOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={closeMenu}
              className={({ isActive }) => `site-nav__link${isActive ? " site-nav__link--active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={closeMenu} className="site-nav__cta">
            Let's talk
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
