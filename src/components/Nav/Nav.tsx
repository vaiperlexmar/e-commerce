import { motion } from "framer-motion";
import style from "@components/Nav/Nav.module.scss";

interface Props {
  isHamburgerOpen: boolean;
  isMobile: boolean;
}

const Nav = ({ isHamburgerOpen, isMobile }: Props) => {
  const variant = isHamburgerOpen ? "opened" : "closed";
  const animation = {
    closed: {
      translateY: "40%",
      translateX: "-50%",
      opacity: 0,
      display: "none",
    },
    opened: {
      translateY: "65%",
      translateX: "-50%",
      opacity: 1,
      display: "block",
    },
  };

  const NavListElement = (
    <ul>
      <li>
        <a className="link nav-link" href="#">
          Shop
        </a>
      </li>
      <li>
        <a className="link nav-link" href="#">
          On sale
        </a>
      </li>
      <li>
        <a className="link nav-link" href="#">
          New Arrivals
        </a>
      </li>
      <li>
        <a className="link nav-link" href="#">
          Brands
        </a>
      </li>
    </ul>
  );

  const NavElement = isMobile ? (
    <motion.nav className={style.nav} variants={animation} animate={variant}>
      {NavListElement}
    </motion.nav>
  ) : (
    <nav className={style.nav}>{NavListElement}</nav>
  );

  return NavElement;
};

export default Nav;
