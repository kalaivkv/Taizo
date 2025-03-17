import React, { useState } from "react";
import styles from "./Header.module.scss";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Jobseeker", href: "/jobseeker" },
  { label: "About Us", href: "/about" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
    
      <div className={styles.logo}>
        <img
          src="https://www.taizo.in/assets/img/New%20header-logo.svg"
          alt="Taizo Logo"
        />
      </div>

     
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <i className={menuOpen ? "bi bi-x" : "bi bi-list"} style={{ fontSize: "28px", color: "black" }}></i>
      </div>

   
      <div className={`${styles.navContainer} ${menuOpen ? styles.showMenu : ""}`}>
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={styles.navItem} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="/contact" className={styles.contactButton} onClick={() => setMenuOpen(false)}>
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
