import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  css: string;
  onClick: () => void;
};

export function Button({ children, css, onClick }: ButtonProps) {
  return (
    <button className={css} onClick={onClick}>
      {children}
    </button>
  );
}



