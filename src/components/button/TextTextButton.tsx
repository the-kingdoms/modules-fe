import { useState } from "react";

interface TextTextButtonProps {
  size: "L" | "M" | "S" | "full";
  className?: string;
  text1: string;
  text2: string;
  inactive?: boolean;
  onClick?: () => void;
}

const style = {
  full: "w-full",
  L: "w-[328px]",
  M: "w-[164px]",
  S: "w-[120px]",
};

export default function TextTextButton({
  size,
  className,
  text1,
  text2,
  inactive,
  onClick,
}: TextTextButtonProps) {
  const [clicked, setClicked] = useState(false);

  const clickHandle = () => {
    if (inactive) return;
    setClicked(true);
    onClick && onClick();
  };

  return (
    <button
      type="button"
      className={`flex justify-center items-center h-[48px] rounded-lg ${
        style[size]
      } ${className} ${inactive ? "bg-Gray2" : "bg-Black"}`}
      onClick={clickHandle}
      disabled={inactive}
    >
      <div
        className={`B4-medium ${
          clicked ? "text-Gray4" : inactive ? "text-Gray3" : "text-white"
        }`}
      >
        {text1}
        <span className="mx-2">|</span>
        {text2}
      </div>
    </button>
  );
}
