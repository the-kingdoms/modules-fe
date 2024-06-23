import React from "react";

interface TextButtonProps {
  size: "L" | "M" | "S" | "full";
  className?: string;
  text: string;
  secondaryText?: string;
  type?: "outline" | "filled";
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

const buttonStyle = {
  filled: {
    active: "bg-black text-white",
    inactive: "bg-Gray3 text-Gray4",
    clicked: "bg-black text-Gray4",
  },
  outline: {
    active: "bg-white border-2 border-Black text-Black",
    inactive: "bg-white border-2 border-Gray2 text-Gray4",
    clicked: "bg-Gray2 border-2 border-Gray5 text-Gray5",
  },
};

export default function TextButton({
  size,
  className,
  text,
  secondaryText,
  type = "filled",
  isClicked,
  inactive,
  onClick,
}: TextButtonProps) {
  const clickHandle = () => {
    if (inactive) return;
    onClick && onClick();
  };

  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-lg h-[48px] ${
        sizeStyle[size]
      } ${buttonStyle[type][inactive ? "inactive" : isClicked ? "clicked" : "active"]}
      ${className}`}
      onClick={clickHandle}
    >
      <div className="B4-medium">
        {text}
        {secondaryText && (
          <>
            <span className="mx-2">|</span>
            {secondaryText}
          </>
        )}
      </div>
    </button>
  );
}
