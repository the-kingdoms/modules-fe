import FlexBox from "../../layout/FlexBox";

interface ProfileProps {
  name: string;
  size: "S" | "M" | "L";
  focus?: boolean;
}

const style = {
  S: "w-12 h-12",
  M: "w-[72px] h-[72px]",
  L: "w-24 h-24",
};
const textStyle = {
  S: "B1-medium",
  M: "H4-bold",
  L: "H1",
};
const colorStyle = {
  focus: "from-[#AEAEAE] to-[#7C7C7C]",
  blur: "from-[#D8D8D8] to-[#BEBEBE]",
};
export default function Profile({ name, size, focus = true }: ProfileProps) {
  return (
    <FlexBox
      className={`bg-gradient-to-b rounded-full ${focus ? colorStyle.focus : colorStyle.blur} ${style[size]} justify-center`}
    >
      <span className={`text-white ${textStyle[size]}`}>{name[0]}</span>
    </FlexBox>
  );
}
