import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import "./index.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: "S" | "M" | "L";
}

export const Button: FC<ButtonProps> = ({ title, size = "M", ...rest }) => {
  return (
    <button className={clsx("button", `button--${size}`)} {...rest}>
      {title}
    </button>
  );
};
