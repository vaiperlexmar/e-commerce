import { useState } from "react";

import Nav from "@components/Nav/Nav";
import Hamburger from "../Hamburger/Hamburger";

import search_icon from "@icons/search.svg";
import cart_icon from "@icons/cart.svg";
import profile_icon from "@icons/profile.svg";

import style from "./Header.module.scss";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  return (
    <header className={style.header}>
      <Hamburger isOpen={isHamburgerOpen} toggle={toggleHamburger} />
      <Nav isHamburgerOpen={isHamburgerOpen} />
      <span className={style.header__logo}>SHOP.CO</span>
      <div className={style.header__actions}>
        <a className="header__action header__action_search">
          <img src={search_icon} alt="search" />
        </a>
        <a className="header__action header__action_cart">
          <img src={cart_icon} alt="cart" />
        </a>
        <a className="header__action header__action_profile">
          <img src={profile_icon} alt="profile" />
        </a>
      </div>
    </header>
  );
};

export default Header;
