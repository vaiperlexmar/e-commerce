import { FC } from "react";
import style from "./Button.module.scss";

interface Props {
  additionalClassName?: string;
  color?: "black" | "white";
  width?: "narrow" | "wide";
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: FC<Props> = ({
  additionalClassName,
  color = "black",
  width = "wide",
  disabled = false,
  onClick,
  children,
}) => {
  const className = `${style.button} ${style["button__" + color]} ${
    style["button__" + width]
  }`;

  return (
    <button
      className={`${className} ${additionalClassName}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
