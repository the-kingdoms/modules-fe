import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";
import { useState } from "react";

interface ScheduleListProps {
  name: string;
  position: "manager" | "parttime" | "etc";
  time: string;
  onDelete?: () => void;
}

const style = {
  manager: "bg-Manager",
  parttime: "bg-PartTime",
  etc: "bg-ETC",
};

export default function ScheduleList({
  name,
  position,
  time,
  onDelete,
}: ScheduleListProps) {
  const [selectList, setSelectList] = useState(false);

  const clickList = () => {
    setSelectList(!selectList);
  };

  return (
    <FlexBox
      direction="row"
      className={`w-full h-14 ${selectList ? "" : "pl-12"}`}
    >
      <button
        type="button"
        className={`w-[280px] h-full ${style[position]}
            flex flex-col items-start gap-1 px-3 py-2.5
            ${selectList ? "rounded-l-xl" : "rounded-xl"}`}
        onClick={clickList}
      >
        <div className="B5-regular text-white">{time}</div>
        <div className="B4-regular text-white">{name}</div>
      </button>
      {selectList && (
        <button
          type="button"
          className="w-12 h-full bg-Gray6 rounded-r-xl flex items-center justify-center"
          onClick={onDelete}
        >
          <span className="hidden">delete</span>
          <Icon src="/icon/control/delete.svg" sz={24} />
        </button>
      )}
    </FlexBox>
  );
}

export type { ScheduleListProps };
