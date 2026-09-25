import { ArrowUpRight, Mail } from "lucide-react";
import { NavLink } from "react-router";
import "./Footer.css";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__intro">
          <p className="site-footer__eyebrow">Have a project in mind?</p>
          <NavLink to="/contact" className="site-footer__heading">
            Let's create something thoughtful <ArrowUpRight aria-hidden="true" />
          </NavLink>
        </div>

        <div className="site-footer__bottom">
          <div>
            <NavLink to="/" className="site-footer__brand">Portfolio</NavLink>
            <p className="site-footer__copyright">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
          <div className="site-footer__links">
            <nav className="site-footer__nav" aria-label="Footer navigation">
              {navigation.map(({ label, to }) => <NavLink key={to} to={to}>{label}</NavLink>)}
            </nav>
            <a className="site-footer__email" href="mailto:hello@example.com"><Mail size={16} aria-hidden="true" /> hello@example.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
