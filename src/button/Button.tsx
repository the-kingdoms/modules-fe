import React from "react";

interface TestButtonProps {
  size: "L" | "M" | "S" | "full";
  className?: string;
  text: string;
  type?: "filled" | "outline" | "border" | "danger" | "disabled";
  isClicked?: boolean;
  inactive?: boolean;
  onClick?: () => void;
}

const sizeStyle = {
  full: "w-full",
  L: "w-[328px]",
  M: "w-[160px]",
  S: "w-[120px]",
};

export const buttonStyle = {
  filled: {
    hover: "bg-Hover-Black",
    active: "bg-Gray-100",
    inactive: "bg-Black",
    clicked: "bg-Black text-Gray-40",
  },
  outline: {
    active: "bg-white border-2 border-Black text-Black",
    inactive: "bg-white border-2 border-Gray-30 text-Gray-40",
    clicked: "bg-Gray-30 border-2 border-Gray-40 text-Gray-40",
  },
  border: {
    default: "bg-Gray-20",
    hover: "bg-Hover-Gray-20",
    active: "bg-Black",
  },
  danger: {
    default: "bg-Red-60",
    hover: "bg-Hover-Red-60",
    active: "bg-Red-80",
  },
  disabled: {
    default: "bg-Gray-30",
  },
};

export default function TestButton({
  size,
  className,
  text,
  type = "filled",
  isClicked,
  inactive,
  onClick,
}: TestButtonProps) {
  const clickHandle = () => {
    if (inactive) return;
    onClick && onClick();
  };

  const stateClass =
    type === "filled" || type === "outline"
      ? buttonStyle[type][
          inactive ? "inactive" : isClicked ? "clicked" : "active"
        ]
      : buttonStyle[type].default;

  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-lg h-[48px] ${
        sizeStyle[size]
      } ${stateClass} ${className}`}
      onClick={clickHandle}
    >
      <div className="B4-medium">{text}</div>
    </button>
  );
}
