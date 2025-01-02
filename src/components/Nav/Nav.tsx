import { motion } from "framer-motion";
import style from "@components/Nav/Nav.module.scss";

interface Props {
  isHamburgerOpen: boolean;
}

const Nav = ({ isHamburgerOpen }: Props) => {
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

  return (
    <motion.nav className={style.nav} variants={animation} animate={variant}>
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
    </motion.nav>
  );
};

export default Nav;
