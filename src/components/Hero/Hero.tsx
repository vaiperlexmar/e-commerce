import Button from "@components/Button/Button";

import CompositionImg from "@assets/components/hero/Rectangle 2.png";
import CompositionStarIcon from "@assets/components/hero/star.svg";
import CKLogo from "@assets/components/hero/ck_logo.svg";
import VersaceLogo from "@assets/components/hero/versace_logo.svg";
import GucciLogo from "@assets/components/hero/gucci_logo.svg";
import ZaraLogo from "@assets/components/hero/zara_logo.svg";
import PradaLogo from "@assets/components/hero/prada_logo.svg";

import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__textbox}>
        <h1 className={style.hero__heading}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className={style.hero__paragraph}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button
          color="black"
          width="wide"
          additionalClassName={style.hero__button}
        >
          Shop Now
        </Button>
        <ul className={style["hero__benefits-list"]}>
          <li className={style["hero__benefits-item"]}>
            <p className={style["hero__benefits-heading"]}>200+</p>
            <p className={style["hero__benefits-description"]}>
              International Brands
            </p>
          </li>
          <li className={style["hero__benefits-item"]}>
            <p className={style["hero__benefits-heading"]}>2,000+ </p>
            <p className={style["hero__benefits-description"]}>
              High-Quality Products
            </p>
          </li>
          <li className={style["hero__benefits-item"]}>
            <p className={style["hero__benefits-heading"]}>30,000+</p>
            <p className={style["hero__benefits-description"]}>
              Happy Customers
            </p>
          </li>
        </ul>
      </div>

      <div className={style["hero__composition"]}>
        <img
          className={style["hero__composition-img"]}
          src={CompositionImg}
          alt=""
        />
        <img
          className={`${style["hero__composition-star"]} ${style["hero__composition-star_big"]}`}
          src={CompositionStarIcon}
          alt=""
        />
        <img
          className={`${style["hero__composition-star"]} ${style["hero__composition-star_small"]}`}
          src={CompositionStarIcon}
          alt=""
        />
      </div>

      <article className={style["hero__brand-block"]}>
        <div className={style["hero__brand-item"]}>
          <img src={VersaceLogo} alt="Versace" />
        </div>
        <div className={style["hero__brand-item"]}>
          <img src={ZaraLogo} alt="Zara" />
        </div>
        <div className={style["hero__brand-item"]}>
          <img src={GucciLogo} alt="Gucci" />
        </div>
        <div className={style["hero__brand-item"]}>
          <img src={PradaLogo} alt="Prada" />
        </div>
        <div className={style["hero__brand-item"]}>
          <img src={CKLogo} alt="Calvin Klein" />
        </div>
      </article>
    </section>
  );
};

export default Hero;
