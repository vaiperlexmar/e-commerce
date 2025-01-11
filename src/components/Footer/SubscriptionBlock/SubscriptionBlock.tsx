import Input from "@components/Input/Input";
import Button from "@components/Button/Button";

import style from "./SubscriptionBlock.module.scss";

function SubscriptionBlock() {
  return (
    <section className={style["subscription"]}>
      <div className={style["subscription__container"]}>
        <h2 className={style["subscription__heading"]}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <Input
          placeholder="Enter your email address"
          additionalClassName={style["subscription__input"]}
          type="email"
        />
        <Button
          width="wide"
          color="white"
          additionalClassName={style["subscription__button"]}
        >
          Subscribe to Newsletter
        </Button>
      </div>
    </section>
  );
}

export default SubscriptionBlock;
