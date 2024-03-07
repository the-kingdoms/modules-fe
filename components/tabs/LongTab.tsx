import { useState } from "react";
import FlexBox from "../../layout/FlexBox";

type Options = "left" | "right";
const options: Options[] = ["left", "right"];
interface LongTabProps {
  text: [string, string];
  className?: string;
  initPage?: Options;
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
      className="w-1/2 h-full"
    >
      <FlexBox direction="col" className="relative w-full h-full">
        <div
          className={`B3-medium text-center mt-3.5 ${
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

export default function LongTab({
  text,
  className,
  initPage = "left",
  pageHandle,
}: LongTabProps) {
  const [page, setPage] = useState<Options>(initPage);

  const onClick = (_page: Options) => {
    setPage(_page);
    pageHandle && pageHandle(_page);
  };

  return (
    <FlexBox className={`w-full h-[48px] ${className}`}>
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
