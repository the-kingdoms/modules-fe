import dayjs from "dayjs";
import FlexBox from "../../layout/FlexBox";

type DayType = "월" | "화" | "수" | "목" | "금" | "토" | "일";
const dayList: DayType[] = ["일", "월", "화", "수", "목", "금", "토"];

interface CalenderProps {
  day?: DayType;
  onClick?: (date: DayType) => void;
}

/**
 * Calender 컴포넌트는 달력을 나타내는 컴포넌트입니다.
 * 파라미터를 넣지 않았을 경우 dayjs를 통해 현재 요일과 주를 계산하여 나타냅니다.
 * 파라미터로는 렌더링할 요일과 요일을 클릭했을 때 실행되는 함수를 받습니다.
 * @param day 요일 (월 | 화 | 수 | 목 | 금 | 토 | 일)
 * @param onClick 요일을 클릭했을 때 실행되는 함수 (date: DayType) => void
 * @returns
 * @example <Calender day="월" onClick={() => {}} />
 */
export default function Calender({ day: paramDay, onClick }: CalenderProps) {
  const startDate = dayjs().startOf("week").date();
  let currentDay = paramDay;
  if (currentDay === undefined) {
    currentDay = dayjs().format("ddd") as DayType;
  }
  return (
    <FlexBox className="w-full justify-between px-4 py-2">
      {dayList.map((day, index) => (
        <button
          key={index}
          type="button"
          className="w-full text-center"
          onClick={() => onClick && onClick(day)}
        >
          <span className="C2 text-Gray5">{day}</span>
          <FlexBox
            direction="col"
            className={`mt-2 w-[24px] h-[24px] mx-auto rounded justify-center ${
              currentDay === day && "bg-black"
            }`}
          >
            {currentDay === day ? (
              <div className="B3-medium text-Gray1">{index + startDate}</div>
            ) : (
              <div className="B3-medium text-Gray6">{index + startDate}</div>
            )}
          </FlexBox>
        </button>
      ))}
    </FlexBox>
  );
}
