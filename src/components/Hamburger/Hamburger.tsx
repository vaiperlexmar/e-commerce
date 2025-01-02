import style from "@components/Hamburger/Hamburger.module.scss";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger = ({ isOpen, toggle }: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 0,
      translateX: 4,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -1,
      translateX: 4,
    },
  };

  return (
    <motion.button className={style.hamburger} onClick={toggle}>
      <motion.span
        className={style.hamburger__line}
        variants={top}
        animate={variant}
      ></motion.span>
      <motion.span
        className={style.hamburger__line}
        variants={center}
        animate={variant}
      ></motion.span>
      <motion.span
        className={style.hamburger__line}
        variants={bottom}
        animate={variant}
      ></motion.span>
    </motion.button>
  );
};

export default Hamburger;
