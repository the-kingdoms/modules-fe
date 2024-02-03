import useDialog from "../../hooks/useDialog";
import FlexBox from "../../layout/FlexBox";

interface ButtonBarProps {
  button: React.ReactNode;
  isAssist?: boolean;
}

function Assist() {
  const { openDialog } = useDialog();
  const onClick = () => {
    // TODO: 직원 호출
    openDialog({
      title: "직원 호출",
      discription: "잠시만 기다려주시면\n직원이 곧 손님에게 갈 겁니다",
      type: "notice",
    });
  };
  return (
    <button type="button" onClick={onClick}>
      <FlexBox className="shrink-0 justify-center w-[48px] h-[48px] rounded-lg bg-White border border-2 border-Gray2">
        <div className="w-[26px] h-[32px] leading-[16px] text-center B4-medium text-Gray6">
          직원
          <br />
          호출
        </div>
      </FlexBox>
    </button>
  );
}

export default function ButtonBar({ button, isAssist }: ButtonBarProps) {
  return (
    <FlexBox
      direction="col"
      className="w-full sticky bottom-0 pb-10 pt-3 px-4 bg-white border-t"
    >
      <FlexBox className="w-full gap-4">
        {button}
        {isAssist && <Assist />}
      </FlexBox>
    </FlexBox>
  );
}
