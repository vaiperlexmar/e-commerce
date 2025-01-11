import { FC } from "react";
import style from "./DressStyleBlock.module.scss";

import dress_style_img_1 from "@assets/components/dress_style/dress_style_img_1.png";
import dress_style_img_2 from "@assets/components/dress_style/dress_style_img_2.png";
import dress_style_img_3 from "@assets/components/dress_style/dress_style_img_3.png";
import dress_style_img_4 from "@assets/components/dress_style/dress_style_img_4.png";

interface CardProps {
  cardImage: string;
  cardText: string;
}

const DressStyleCategoryCard: FC<CardProps> = function ({
  cardImage,
  cardText,
}) {
  return (
    <a className="link" href="#">
      <div className={style["card"]}>
        <h3 className={style["card__title"]}>{cardText}</h3>
        <img className={style["card__img"]} src={cardImage} alt="" />
      </div>
    </a>
  );
};

function DressStyle() {
  return (
    <section className={style["dress-style"]}>
      <h2 className={style["dress-style__heading"]}>BROWSE BY dress STYLE</h2>
      <div className={style["dress-style__items"]}>
        <DressStyleCategoryCard
          cardImage={dress_style_img_1}
          cardText="Casual"
        />
        <DressStyleCategoryCard
          cardImage={dress_style_img_2}
          cardText="Formal"
        />
        <DressStyleCategoryCard
          cardImage={dress_style_img_3}
          cardText="Party"
        />
        <DressStyleCategoryCard cardImage={dress_style_img_4} cardText="Gym" />
      </div>
    </section>
  );
}

export default DressStyle;
