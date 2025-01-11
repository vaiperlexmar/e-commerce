import { Rating } from "react-simple-star-rating";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import arrow_icon from "@assets/icons/arrow.svg";
import approved_icon from "@assets/icons/approved.svg";

import { IReview } from "@/types";

import style from "./ReviewBlock.module.scss";

function ReviewBlock() {
  const reviewsDraft: IReview[] = [
    {
      rating: 5,
      username: "Sarah M.",
      verified: true,
      text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      rating: 5,
      username: "Sarah M.",
      verified: true,
      text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
      rating: 5,
      username: "Sarah M.",
      verified: true,
      text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
  ];
  const reviews = reviewsDraft.map((item, itemIndex) => {
    return (
      <Slide index={itemIndex} className="review-block__item">
        <div className={style["review"]}>
          <Rating
            className={style["review__rating"]}
            initialValue={item.rating}
            size={19.19}
            fillColor={"#FFC633"}
            allowFraction={true}
            readonly
          />
          <p className={style.review__username}>
            {item.username} {item.verified ? <img src={approved_icon} /> : null}
          </p>
          <p className={style.review__text}>{item.text}</p>
        </div>
      </Slide>
    );
  });

  return (
    <section className={style["review-block"]}>
      <CarouselProvider
        naturalSlideWidth={180}
        naturalSlideHeight={100}
        totalSlides={reviews.length}
        currentSlide={0}
        infinite={true}
      >
        <header className={style["review-block__header"]}>
          <h2 className={style["review-block__heading"]}>
            OUR HAPPY CUSTOMERS
          </h2>
          <div className={style["review-block__controls"]}>
            <ButtonBack
              className={`${style["review-block__controls-button"]} ${style["review-block__controls-button_left"]}`}
            >
              <img src={arrow_icon} alt="" />
            </ButtonBack>
            <ButtonNext
              className={`${style["review-block__controls-button"]} ${style["review-block__controls-button_right"]}`}
            >
              <img src={arrow_icon} alt="" />
            </ButtonNext>
          </div>
        </header>
        <Slider>{reviews}</Slider>
      </CarouselProvider>
    </section>
  );
}

export default ReviewBlock;
