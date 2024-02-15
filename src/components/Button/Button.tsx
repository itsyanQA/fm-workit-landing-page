import "./Button.scss";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button className="button">{children}</button>;
}
