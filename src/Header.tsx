import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { navigate } from "./redux/navigationSlice";
import styles from "./Header.module.scss";
import SkilledProfessionals from "./SkilledProfessionals";
import Footer from "./Footer";
import WhoWeServe from "./WhoWeServe";
import Clients from "./Clients";
import Company from "./Company";
import Home from "./Home";
import Job from "./Job";

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Jobseeker", href: "/jobseeker" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact", isButton: true },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.navigation.page);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, [currentPage]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://www.taizo.in/assets/img/New%20header-logo.svg"
            alt="Taizo Logo"
          />
        </div>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <i className={menuOpen ? "bi bi-x" : "bi bi-list"}></i>
        </div>

        <div
          className={`${styles.navContainer} ${
            menuOpen ? styles.showMenu : ""
          }`}
        >
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <button
                key={item.label}
                className={
                  item.isButton ? styles.contactButton : styles.navItem
                }
                onClick={() => {
                  dispatch(navigate(item.href.replace("/", "")));
                  window.history.pushState({}, "", item.href);
                  closeMenu();
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {currentPage === "home" && (
        <>
          <Home />
          <Clients />
          <Company />
          <WhoWeServe />
          <SkilledProfessionals />
          <Footer />
        </>
      )}

      {currentPage === "jobseeker" && (
        <>
          <Job />
          <Footer />
        </>
      )}
    </>
  );
};

export default Header;
