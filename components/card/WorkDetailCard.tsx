import { calculateHours } from "../card/calculateHours";
import FlexBox from "../../layout/FlexBox";
import dayjs from "dayjs";

type WorkType = REGULAR | EXTRA;
type REGULAR = "regular";
type EXTRA = "extra";

interface WorkDetailCardProps {
  type: WorkType;
  date: string;
  startTime: string;
  endTime: string;
}

export default function WorkDetailCard({
  type,
  date,
  startTime,
  endTime,
}: WorkDetailCardProps) {
  const showWorkingTime = () => {
    const start = startTime;
    const end = endTime;
    return `${start} ~ ${end}`;
  };

  if (type === "regular")
    return (
      <FlexBox
        direction="col"
        className="self-start rounded-2xl border-2 border-Gray7 p-3 w-[270px] items-start gap-0.5"
      >
        <div className="B5-regular">
          {dayjs(date).locale("kr").format("M.DD dddd")}
        </div>
        <FlexBox className="gap-2">
          <span className="B3-medium">{showWorkingTime()}</span>
          <span className="B4-medium">
            ({calculateHours(endTime, startTime)})
          </span>
        </FlexBox>
      </FlexBox>
    );
  return (
    <FlexBox
      direction="col"
      className="self-end rounded-2xl border-2 border-Gray7 p-3 w-[270px] items-start gap-0.5 bg-Black"
    >
      <div className="B5-regular text-Gray1">
        {dayjs(date).locale("kr").format("M.DD dddd")}
      </div>
      <div className="B3-medium text-Gray1">
        {showWorkingTime()}
        <span className="B4-medium ml-1">(연장근무)</span>
      </div>
    </FlexBox>
  );
}
