export interface IItem {
  id: number;
  title: string;
  description: string;
  basePrice: number;
  color: string;
  size: string;
  count: number;
  discount: number;
  totalPrice: number;
  imgUrl: string;
  rating: number;
}

export interface IReview {
  rating: number;
  username: string;
  verified: boolean;
  text: string;
}
