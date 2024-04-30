import dayjs from "dayjs";
import FlexBox from "../../layout/FlexBox";

interface WorkInfoBannerProps {
  direction: "left" | "right";
  size: "S" | "L";
  type: "regular" | "overtime";
  workingMinutes: number;
}
const styleBySize = {
  S: "w-[172px]",
  L: "w-[280px]",
};
const styleByDirection = {
  left: "rounded-r-[12px] pl-4 pr-5",
  right: "rounded-l-[12px] pr-4 pl-5",
};

/**
 * WorkInfoBanner 컴포넌트는 근무시간 배너 컴포넌트입니다.
 * @param direction 배너가 나타나는 위치를 결정합니다. (left | right)
 * @param size 배너의 크기를 결정합니다. (S | L)
 * @param type 배너의 정규, 연장 근무 타입을 결정합니다. (regular | overtime)
 * @param workingMinutes 근무시간을 분 단위로 입력합니다.
 * @returns {JSX.Element} WorkInfoBanner 컴포넌트를 반환합니다.
 * @example <WorkInfoBanner direction="right" size="S" type="overtime" workingMinutes={2200} />
 */
export default function WorkInfoBanner({
  direction,
  size,
  type,
  workingMinutes = 0,
}: WorkInfoBannerProps) {
  const hours = Math.floor(workingMinutes / 60);
  const minutes = workingMinutes % 60;
  const currentDate = dayjs().format("MM/DD");
  return (
    <div
      className={`h-[76px] bg-black py-2 ${styleByDirection[direction]} ${styleBySize[size]}`}
    >
      <FlexBox
        direction="col"
        className="w-full h-full items-start justify-between"
      >
        <span className="B5-medium text-Gray2">
          {type === "regular" ? "정규 근무" : "연장 근무"}
        </span>
        <FlexBox className="w-full justify-between">
          <FlexBox className={size === "L" ? "gap-2" : "gap-1"}>
            <FlexBox className={size === "L" ? "gap-1" : ""}>
              <span className="H4-bold text-white">
                {hours.toString().padStart(3, "0")}
              </span>
              <span className="B3-medium text-Gray3 mt-1.5">시간</span>
            </FlexBox>
            <FlexBox className={size === "L" ? "gap-1" : ""}>
              <span className="H4-bold text-white">
                {minutes.toString().padStart(2, "0")}
              </span>
              <span className="B3-medium text-Gray3 mt-1.5">분</span>
            </FlexBox>
          </FlexBox>
          {size === "L" && (
            <div className="B4-medium text-Gray5 mt-1.5">
              {currentDate} 기준
            </div>
          )}
        </FlexBox>
      </FlexBox>
    </div>
  );
}
