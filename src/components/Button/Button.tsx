import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = (props: Props) => {
  const { className, children, onClick, disabled } = props;

  const defaultClasses =
    "bg-blue-500 hover:bg-blue-600 transition ease-in-out delay-50 text-white rounded shadow";

  return (
    <button
      disabled={disabled}
      className={`${!disabled && defaultClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
