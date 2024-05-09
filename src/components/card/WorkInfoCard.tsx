import { Dayjs } from "dayjs";
import FlexBox from "../../layout/FlexBox";

interface WorkInfoCardProps {
  startDate: Dayjs;
  endDate: Dayjs;
  workingDays: number;
  workingMinutes: number;
  overtimeMinutes: number;
  onClick?: () => void;
}

function FormattedDate({ date }: { date: Dayjs }) {
  return <span>{date.format("YY/MM/DD (ddd)")}</span>;
}

function FormattedWorkTime({ minutes: totalMinutes }: { minutes: number }) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return (
    <FlexBox className="gap-1">
      <FlexBox>
        <span className="H5-bold">{hours.toString().padStart(3, "0")}</span>
        <span className="B4-medium text-Gray5 mt-1.5">시간</span>
      </FlexBox>
      <FlexBox>
        <span className="H5-bold">{minutes.toString().padStart(2, "0")}</span>
        <span className="B4-medium text-Gray5 mt-1.5">분</span>
      </FlexBox>
    </FlexBox>
  );
}

/**
 * WorkInfoBanner 컴포넌트는 근무시간 카드 컴포넌트입니다.
 * @param startDate 근무 시작일을 입력합니다. (Dayjs 객체)
 * @param endDate 근무 종료일을 입력합니다. (Dayjs 객체)
 * @param workingDays 근무일수를 입력합니다.
 * @param workingMinutes 근무시간을 분 단위로 입력합니다.
 * @param overtimeMinutes 연장근무시간을 분 단위로 입력합니다.
 * @param onClick 상세보기 버튼 클릭 시 실행할 함수를 입력합니다.
 * @returns 근무시간 카드 컴포넌트를 반환합니다.
 * @example <WorkInfoCard startDate={dayjs().startOf("week")} endDate={dayjs().endOf("week")} workingDays={3} workingMinutes={190} overtimeMinutes={10} />
 */
export default function WorkInfoCard({
  startDate,
  endDate,
  workingDays = 0,
  workingMinutes = 0,
  overtimeMinutes = 0,
  onClick,
}: WorkInfoCardProps) {
  return (
    <FlexBox direction="col" className="w-full">
      <FlexBox
        direction="col"
        className="w-full gap-2 p-4 bg-white rounded-t-xl border-t border-x border-Gray2 items-start"
      >
        <FlexBox direction="col" className="w-full gap-4 items-start">
          <FlexBox className="gap-1 B5-medium text-Gray4">
            <FormattedDate date={startDate} />
            <div className="w-[8px] h-[1px] bg-Gray3 rounded-sm" />
            <FormattedDate date={endDate} />
          </FlexBox>
          <FlexBox className="w-full justify-between">
            <FlexBox className="gap-1">
              <div className="w-4 h-4 bg-PartTime rounded-full" />
              <div className="B3-medium text-Gray6">정규 근무</div>
            </FlexBox>
            <FormattedWorkTime minutes={workingMinutes} />
          </FlexBox>
          <FlexBox className="w-full justify-between">
            <FlexBox className="gap-1">
              <div className="w-4 h-4 bg-white rounded-full border-4 border-PartTime" />
              <div className="B3-medium text-Gray6">연장 근무</div>
            </FlexBox>
            <FormattedWorkTime minutes={overtimeMinutes} />
          </FlexBox>
        </FlexBox>
        <FlexBox className="B4-medium text-Gray5 gap-2">
          <span>{workingDays}일 근무</span>
          <span>주휴수당 적용</span>
        </FlexBox>
      </FlexBox>
      <button
        type="button"
        className="w-full bg-Gray6 py-3 text-center rounded-b-xl"
        onClick={onClick}
      >
        <span className="B4-medium text-Gray1">상세 보기</span>
      </button>
    </FlexBox>
  );
}
