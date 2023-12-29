import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger" | "close";
}
const Button = ({ children, onClick, color = "primary" }: ButtonProps) => (
  <button type="button" className={"btn btn-" + color} onClick={onClick}>
    {children}
  </button>
);

export default Button;
