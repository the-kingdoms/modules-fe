import Icon from "../../layout/Icon";
import FlexBox from "../../layout/FlexBox";

interface FloatingActionButtonProps {
  text: string;
  onClick?: () => void;
}

export default function FloatingActionButton({
  text,
  onClick,
}: FloatingActionButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <FlexBox className="w-fit rounded-full bg-Gray7 p-3 gap-2">
        <Icon src="/icon/control/plus.svg" />
        <span className="B4-regular text-white">{text}</span>
      </FlexBox>
    </button>
  );
}
