import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

interface CategoryInfoProps {
  title: string;
  description: string;
  edit: boolean;
}

export default function CategoryInfo({
  title,
  description,
  edit,
}: CategoryInfoProps) {
  return (
    <FlexBox direction="row" className="justify-between items-center w-full">
      <FlexBox direction="col" className="items-start gap-1">
        <div className="B3-medium text-Gray7">{title}</div>
        <div className="C2 text-Gray4">{description}</div>
      </FlexBox>
      {edit && (
        <Icon src="/icon/control/edit.svg" sz={24} className="cursor-pointer" />
      )}
    </FlexBox>
  );
}
