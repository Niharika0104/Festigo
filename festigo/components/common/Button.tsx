import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  css: string;
};

export function Button({ children, css }: ButtonProps) {
  return <button className={css}>{children}</button>;
}
