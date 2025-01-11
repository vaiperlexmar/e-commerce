import { FC } from "react";

import twitter_icon from "@assets/icons/twitter.svg";
import fb_icon from "@assets/icons/fb.svg";
import instagram_icon from "@assets/icons/instagram.svg";
import github_icon from "@assets/icons/github.svg";

import visa_badge from "@assets/icons/visa_badge.svg";
import mastercard_badge from "@assets/icons/mastercard_badge.svg";
import paypal_badge from "@assets/icons/paypal_badge.svg";
import applepay_badge from "@assets/icons/applepay_badge.svg";
import googlepay_badge from "@assets/icons/googlepay_badge.svg";

import SubscriptionBlock from "@components/Footer/SubscriptionBlock/SubscriptionBlock";

import style from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={style["footer"]}>
      <SubscriptionBlock />

      <span className={style["footer__logo"]}>SHOP.CO</span>
      <p className={style["footer__slogan"]}>
        We have clothes that suits your style and which you’re proud to wear.
        From women to men.
      </p>
      <div className={style["footer__social"]}>
        <a href="#" className={`${style["footer__social-link"]}`}>
          <img src={twitter_icon} alt="twitter" />
        </a>
        <a href="#" className={`${style["footer__social-link"]}`}>
          <img src={fb_icon} alt="facebook" />
        </a>
        <a href="#" className={`${style["footer__social-link"]}`}>
          <img src={instagram_icon} alt="instagram" />
        </a>
        <a href="#" className={`${style["footer__social-link"]}`}>
          <img src={github_icon} alt="github" />
        </a>
      </div>

      <div className={style["footer__nav"]}>
        <div className={style["footer__nav-item"]}>
          <p className={style["footer__nav-heading"]}>Company</p>
          <ul className={style["footer__nav-list"]}>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Features
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Works
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Career
              </a>
            </li>
          </ul>
        </div>

        <div className={style["footer__nav-item"]}>
          <p className={style["footer__nav-heading"]}>Help</p>
          <ul className={style["footer__nav-list"]}>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className={style["footer__nav-item"]}>
          <p className={style["footer__nav-heading"]}>FAQ</p>
          <ul className={style["footer__nav-list"]}>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Account
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Manage Deliveries
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Payment
              </a>
            </li>
          </ul>
        </div>

        <div className={style["footer__nav-item"]}>
          <p className={style["footer__nav-heading"]}>Resources</p>
          <ul className={style["footer__nav-list"]}>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Free eBook
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                How to - Blog
              </a>
            </li>
            <li>
              <a href="#" className={style["footer__nav-link"]}>
                Youtube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr
        className={`${style["horizontal-rule_section"]} horizontal-rule_section`}
      />
      <p className={style["footer__copyright"]}>
        Shop.co © 2000-2023, All Rights Reserved
      </p>
      <div className={style["footer__payments"]}>
        <img src={visa_badge} alt="visa badge" />
        <img src={mastercard_badge} alt="mastercard badge" />
        <img src={paypal_badge} alt="paypal badge" />
        <img src={applepay_badge} alt="applepay badge" />
        <img src={googlepay_badge} alt="googlepay badge" />
      </div>
    </footer>
  );
};

export default Footer;
