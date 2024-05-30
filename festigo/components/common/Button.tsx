import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  css: string;
  clickHandler: () => void;
};


export function Button({ children, css, onClick }: ButtonProps) {
  return (
    <button className={css} onClick={onClick}>
      {children}
    </button>
  );
}



