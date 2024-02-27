import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";
import { useState } from "react";
import styles from "./ScheduleList.module.css";

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
  const [selectList, setSelectList] = useState<boolean | null>(null);

  const clickList = () => {
    if (selectList === null) setSelectList(true);
    else setSelectList(!selectList);
  };

  return (
    <FlexBox direction="row" className="w-full h-14 relative">
      <button
        type="button"
        className={`absolute right-0 w-[280px] h-full rounded-xl ${style[position]} ${selectList ? styles.appear : styles.disappear}`}
        onClick={clickList}
      >
        <FlexBox direction="col" className="items-start gap-1 px-3 py-2.5">
          <div className="B5-regular text-white">{time}</div>
          <div className="B4-regular text-white">{name}</div>
        </FlexBox>
      </button>
      <div className="ml-auto h-full bg-Gray6 rounded-r-xl w-12">
        <button
          type="button"
          className="h-full w-full flex items-center justify-center"
          onClick={onDelete}
        >
          <span className="hidden">delete</span>
          <Icon src="/icon/control/delete.svg" sz={18} />
        </button>
      </div>
    </FlexBox>
  );
}

export type { ScheduleListProps };
