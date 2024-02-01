import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";

export default function HomeBar() {
  return (
    <FlexBox className="mt-2 justify-between w-full px-4">
      <FlexBox>
        <div className="B4-medium text-Gray6 max-w-[200px] truncate overflow-ellipsis">
          서울특별시 마포구 월드컵북로4
        </div>
        <Icon src="/icon/direction/down.svg" sz={20} />
      </FlexBox>
      <FlexBox className="gap-2">
        <FlexBox className="px-2 py-[2px] bg-black rounded-full">
          <div className="C3 text-White">NFC 스캔</div>
        </FlexBox>
        <Icon src="/icon/default/search.svg" sz={24} />
      </FlexBox>
    </FlexBox>
  );
}
