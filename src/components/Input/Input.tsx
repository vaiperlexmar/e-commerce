import { FC } from "react";

import style from "./Input.module.scss";

interface Props {
  additionalClassName?: string;
  placeholder?: string;
  type?: "text" | "email";
}

const Input: FC<Props> = ({
  placeholder,
  type = "text",
  additionalClassName,
}) => {
  return (
    <input
      className={`${style["input"]} ` + additionalClassName}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
