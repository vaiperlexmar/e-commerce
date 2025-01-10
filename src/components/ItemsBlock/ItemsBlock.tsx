import { FC } from "react";
import { Rating } from "react-simple-star-rating";
import { IItem } from "@/types";

import Button from "@components/Button/Button";

import style from "./ItemsBlock.module.scss";

interface Props {
  heading: string;
  items: Array<IItem>;
}

const ItemsBlock: FC<Props> = ({ heading, items }) => {
  const itemsEl = items.map((item) => {
    return (
      <li className={style.item} key={item.id}>
        <img className={style["item__img"]} src={item.imgUrl} />
        <p className={style["item__title"]}>{item.title}</p>
        <div className={style["item__rating"]}>
          <Rating
            initialValue={item.rating}
            size={15}
            fillColor={"#FFC633"}
            allowFraction={true}
            readonly
          />
          <span className={style["item__rating-value"]}>
            {item.rating}/<span className={style["item__rating-full"]}>5</span>
          </span>
        </div>
        <div className={style["item__price"]}>
          <span className={style["item__price-total"]}>${item.totalPrice}</span>
          <span className={style["item__price-base"]}>${item.basePrice}</span>
          <div className={style["item__price-discount"]}>-{item.discount}%</div>
        </div>
      </li>
    );
  });

  return (
    <section className={style["items"]}>
      <h2 className={style["items__heading"]}>{heading}</h2>
      <ul className={style["items__list"]}>{itemsEl}</ul>
      <Button color="white" width="wide">
        View All
      </Button>
    </section>
  );
};

export default ItemsBlock;
