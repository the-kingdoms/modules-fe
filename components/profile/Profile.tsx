import FlexBox from "../../layout/FlexBox";

interface ProfileProps {
  name: string;
  size: "S" | "M1" | "M2" | "L";
  focus?: boolean;
}

const style = {
  S: "w-12 h-12",
  M1: "w-14 h-14",
  M2: "w-[72px] h-[72px]",
  L: "w-24 h-24",
};
const textStyle = {
  S: "B1-medium",
  M1: "H5-bold",
  M2: "H4-bold",
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
