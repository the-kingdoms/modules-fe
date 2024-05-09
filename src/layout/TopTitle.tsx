import { useRouter } from "next/router";
import FlexBox from "./FlexBox";
import Icon from "./Icon";

interface Props {
  type?: "back" | "cancel";
  title?: string;
  iconSrc?: string;
  onClickIcon?: () => void;
}

/**
 * TopTitle 컴포넌트는 상단 타이틀을 표시하는 컴포넌트입니다.
 * @param type 타이틀의 타입입니다. back은 뒤로가기, cancel은 취소 버튼을 표시합니다.
 * @param title 타이틀의 내용입니다.
 * @param iconSrc 타이틀 오른쪽에 표시할 아이콘의 경로입니다. 없으면 표시하지 않습니다.
 * @param onClickIcon 타이틀 오른쪽에 표시할 아이콘을 클릭했을 때 실행할 함수입니다.
 * @returns
 */
export default function TopTitle({
  type = "back",
  title,
  iconSrc,
  onClickIcon,
}: Props) {
  const router = useRouter();
  return (
    <FlexBox className="w-full h-[60px] shrink-0">
      <div className="w-[32px] shrink-0 cursor-pointer">
        <Icon
          src={
            type === "back"
              ? "/icon/direction/left.svg"
              : "/icon/control/close.svg"
          }
          sz={32}
          onClick={router.back}
        />
      </div>
      <FlexBox className="w-full h-full justify-center">
        <div className="B4-medium">{title}</div>
      </FlexBox>
      <div className="w-[32px] shrink-0 cursor-pointer">
        {iconSrc && <Icon src={iconSrc} sz={32} onClick={onClickIcon} />}
      </div>
    </FlexBox>
  );
}
