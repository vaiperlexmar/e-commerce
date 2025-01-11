import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import ItemsBlock from "@components/ItemsBlock/ItemsBlock";
import DressStyleBlock from "@/components/DressStyleBlock/DressStyleBlock";
import ReviewBlock from "@/components/ReviewBlock/ReviewBlock";
import { IItem } from "./types";

// Temp Imports
import ItemImg from "@assets/Frame 32.png";
import SubscriptionBlock from "./components/SubscriptionBlock/SubscriptionBlock";

const newArrivals: IItem[] = [
  {
    id: 1,
    title: "T-shirt with Tape Detals",
    description: "T-SHIRT WITH TAPE DETAILS",
    basePrice: 120.99,
    color: "black",
    size: "48",
    count: 10,
    discount: 15,
    totalPrice: 102.84,
    imgUrl: ItemImg,
    rating: 4.25,
  },
  {
    id: 2,
    title: "T-shirt with Tape Detals",
    description: "T-SHIRT WITH TAPE DETAILS",
    basePrice: 120.99,
    color: "black",
    size: "48",
    count: 10,
    discount: 15,
    totalPrice: 102.84,
    imgUrl: ItemImg,
    rating: 4.5,
  },
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ItemsBlock heading="NEW ARRIVALS" items={newArrivals} />
      <hr className="horizontal-rule_section" />
      <ItemsBlock heading="TOP SELLING" items={newArrivals} />
      <DressStyleBlock />
      <ReviewBlock />
      <SubscriptionBlock />
    </>
  );
}

export default App;
