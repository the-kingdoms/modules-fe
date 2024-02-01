import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";

interface MenuInfoProps {
  title: string;
  options: Array<Options>;
  type: string;
}

interface Options {
  name: string;
  price: number;
}

// type SINGLE = "SINGLE";
// type MULTIPLE = "MULTIPLE";

export default function MenuInfo({ title, options, type }: MenuInfoProps) {
  return (
    <FlexBox direction="col" className="w-full p-4 gap-4">
      <FlexBox direction="row" className="justify-between w-full">
        <div className="B1-medium text-Black">{title}</div>
        <Icon src="/icon/control/edit.svg" sz={24} />
      </FlexBox>
      <FlexBox direction="col" className="items-start gap-5 w-full">
        {options.map((option, index) => (
          <div key={index} className="w-full">
            {option.name} : {type === "MULTIPLE" && "+"}
            {option.price.toLocaleString()}원
          </div>
        ))}
      </FlexBox>
    </FlexBox>
  );
}
