import { useState } from "react";

interface TextButtonProps {
  size: "L" | "M" | "S" | "full";
  className?: string;
  text: string;
  inactive?: boolean;
  onClick?: () => void;
}

const style = {
  full: "w-full",
  L: "w-[328px]",
  M: "w-[164px]",
  S: "w-[120px]",
};

export default function TextButton({
  size,
  className,
  text,
  inactive,
  onClick,
}: TextButtonProps) {
  const [clicked, setClicked] = useState(false);

  const clickHandle = () => {
    if (inactive) return;
    setClicked(true);
    onClick && onClick();
  };

  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-lg h-[48px] ${
        style[size]
      } ${className} ${inactive ? "bg-Gray2" : "bg-Black"}`}
      onClick={clickHandle}
    >
      <div
        className={`B4-medium ${
          clicked ? "text-Gray4" : inactive ? "text-Gray3" : "text-white"
        }`}
      >
        {text}
      </div>
    </button>
  );
}
