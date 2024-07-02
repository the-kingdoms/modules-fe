import React from "react";

export interface TestButtonProps {
  size: "L" | "M" | "S" | "full";
  className?: string;
  text: string;
  type?: "primary" | "secondary" | "border" | "ghost";
  variant?: "default" | "danger" | "elevated";
  isClicked?: boolean;
  inactive?: boolean;
  onClick?: () => void;
}

export const sizeStyle = {
  full: "w-full",
  L: "max-w-[128px] h-[48px] rounded-radius-04",
  M: "max-w-[128px] h-[40px] rounded-radius-04",
  S: "max-w-[128px] h-[32px] rounded-radius-03",
};

export interface ButtonStyles {
  [key: string]: {
    default: string;
    hover: string;
    focus: string;
    active: string;
    disabled: string;
    danger: string;
    elevated: string;
  };
}

export const buttonStyle: ButtonStyles = {
  primary: {
    default: "bg-Black",
    hover: "bg-Hover-Black",
    focus: "bg-Gray-100",
    active: "bg-Black",
    disabled: "bg-Gray-30",
    danger: "bg-Red-60",
    elevated: "bg-Black shadow-md",
  },
  secondary: {
    default: "bg-Gray-70",
    hover: "bg-Hover-Gray-70",
    focus: "bg-Gray-50",
    active: "bg-Gray-70",
    disabled: "bg-Gray-30",
    danger: "bg-Red-60",
    elevated: "bg-Black shadow-md",
  },
  border: {
    default: "bg-Gray-20",
    hover: "bg-Hover-Gray-20",
    focus: "bg-Black",
    active: "bg-Gray-70",
    disabled: "bg-Gray-30 text-Gray-50",
    danger: "bg-Red-60",
    elevated: "bg-Black shadow-md",
  },
  ghost: {
    default: "bg-Black",
    hover: "bg-Black",
    focus: "bg-Black",
    active: "bg-Black",
    disabled: "bg-Gray-30",
    danger: "bg-Red-60",
    elevated: "bg-Black shadow-md",
  },
};

export default function TestButton({
  size,
  className,
  text,
  type = "primary",
  variant = "default",
  isClicked,
  inactive,
  onClick,
}: TestButtonProps) {
  const clickHandle = () => {
    if (inactive) return;
    onClick && onClick();
  };

  const stateClass = inactive
    ? buttonStyle[type]["disabled"]
    : isClicked
    ? buttonStyle[type]["focus"]
    : buttonStyle[type][variant] || buttonStyle[type]["default"];
  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-lg px-4 ${sizeStyle[size]} ${stateClass} ${className} hover:${buttonStyle[type]["hover"]}`}
      onClick={clickHandle}
    >
      <div className="text-s text-white">{text}</div>
    </button>
  );
}
