import { useState } from "react";

interface TextFieldButtonProps {
  className?: string;
  text: string;
  inactive?: boolean;
  onClick?: () => void;
}

export default function TextFieldButton({
  className,
  text,
  inactive,
  onClick,
}: TextFieldButtonProps) {
  const [clicked, setClicked] = useState(false);

  const clickHandle = () => {
    if (inactive) return;
    setClicked(true);
    onClick && onClick();
  };

  return (
    <button
      type="button"
      className={`shrink-0 flex justify-center items-center rounded h-[40px] w-[120px] ${className} ${
        inactive ? "bg-Gray2" : "bg-Black"
      }`}
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
