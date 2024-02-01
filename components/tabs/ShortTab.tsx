import FlexBox from "@modules/layout/FlexBox";
import { useState } from "react";

type Options = "left" | "center" | "right";
const options: Options[] = ["left", "center", "right"];
interface ShortTabProps {
  text: [string, string, string];
  className?: string;
  pageHandle?: (page: Options) => void;
}

interface TabProps {
  text: string;
  currentPage: Options;
  position: Options;
  onClick: (page: Options) => void;
}

function Tab({ text, currentPage, position, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(position)}
      className="w-1/3 h-full"
    >
      <FlexBox direction="col" className="relative w-full h-full">
        <div
          className={`B4-medium text-center mt-1.5 ${
            currentPage === position ? "text-Black" : "text-Gray3"
          }`}
        >
          {text}
        </div>
        <div
          className={`w-full bottom-0 absolute ${
            currentPage === position
              ? `h-[2px] bg-Black rounded-tr-[2px]`
              : `h-[1px] bg-Gray3`
          }`}
        />
      </FlexBox>
    </button>
  );
}

export default function ShortTab({
  text,
  className,
  pageHandle,
}: ShortTabProps) {
  const [page, setPage] = useState<Options>("left");

  const onClick = (_page: Options) => {
    setPage(_page);
    pageHandle && pageHandle(_page);
  };

  return (
    <FlexBox className={`w-full h-[32px] ${className}`}>
      {options.map((option, index) => (
        <Tab
          key={index}
          text={text[index]}
          currentPage={page}
          position={option}
          onClick={onClick}
        />
      ))}
    </FlexBox>
  );
}
