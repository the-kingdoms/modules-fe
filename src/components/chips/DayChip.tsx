import FlexBox from "../../layout/FlexBox";

const buttonStyle = {
  workday: "border-Black bg-Black text-White",
  dayoff: "border-Red bg-Gray1 text-Red",
  inputing: "border-Black bg-Gray1 text-Black",
  inputed: "border-Gray6 bg-Gray6 text-Gray3",
  inactive: "border-Gray1 bg-Gray1 text-Gray4",
};

interface DayChipProps {
  day: "월" | "화" | "수" | "목" | "금" | "토" | "일";
  type: "workday" | "dayoff" | "inputing" | "inputed" | "inactive";
  onChipClick?: () => void;
}

/**
 * DayChip 컴포넌트는 요일을 나타내는 칩입니다.
 * @param day 요일 (월 | 화 | 수 | 목 | 금 | 토 | 일)
 * @param type 칩의 타입 (workday | dayoff | inputing | inputed | inactive)
 * @param onChipClick 칩을 클릭했을 때 실행할 함수
 * @returns
 * @example <DayChip day="월" type="workday" onChipClick={() => {}} />
 */
export default function DayChip({ day, type, onChipClick }: DayChipProps) {
  return (
    <button type="button" onClick={onChipClick}>
      <FlexBox
        className={`justify-center w-[40px] h-[44px] rounded-xl border border-1 ${buttonStyle[type]}`}
      >
        <span className="B3-regular">{day}</span>
      </FlexBox>
    </button>
  );
}
