import FlexBox from "../../layout/FlexBox";

interface ProfileProps {
  name: string;
  size: "S" | "M" | "L";
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
export default function Profile({ name, size }: ProfileProps) {
  return (
    <FlexBox
      className={`bg-gradient-to-b from-[#AEAEAE] to-[#7C7C7C] rounded-full ${style[size]} justify-center`}
    >
      <span className={`text-white ${textStyle[size]}`}>{name[0]}</span>
    </FlexBox>
  );
}
