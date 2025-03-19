import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { navigate } from "./redux/navigationSlice";
import styles from "./Header.module.scss";
import SkilledProfessionals from "./Home/SkilledProfessionals";
import Footer from "./Footer";
import WhoWeServe from "./Home/WhoWeServe";
import Clients from "./Home/Clients";
import Company from "./Home/Company";
import Home from "./Home/Home";
import Job from "./Jobseeker/Job";
import AboutUs from "./AboutUs/AboutUs";
import Team from "./Team";
import Supporters from "./AboutUs/Supporter";
import Mentors from "./AboutUs/Mentors";
import Address from "./ContactUs/Address";
import Offers from "./Jobseeker/Offers";

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
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      dispatch(navigate(savedPage)); 
    }
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = "auto";
    localStorage.setItem("currentPage", currentPage); 
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
          <Offers />
          <Job />
          <Footer />
        </>
      )}

      {currentPage === "about" && (
        <>
          <AboutUs />
          <Team />
          <Mentors />
          <Supporters />
          <Footer />
        </>
      )}

      {currentPage === "contact" && (
        <>
          <Address />
          <Footer />
        </>
      )}
    </>
  );
};

export default Header;
