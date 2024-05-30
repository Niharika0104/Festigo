import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  css: string;
  onClick: () => void;
};

<<<<<<< HEAD
export function Button({ children, css, onClick }: ButtonProps) {
=======

export function Button({ children, css, clickHandler }: ButtonProps) {
>>>>>>> 7735e4616d4cfe9a9634653888b76fcead86e71d
  return (
    <button className={css} onClick={clickHandler}>
      {children}
    </button>
  );
}
