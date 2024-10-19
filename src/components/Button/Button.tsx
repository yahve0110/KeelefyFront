import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const { className, children, onClick, disabled } = props;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
