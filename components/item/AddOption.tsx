import Divider from "@modules/layout/Divider";
import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";
import { useState } from "react";

export default function AddOption() {
  const [optionCount, setOptionCount] = useState<number>(2);

  const addOptionCount = () => {
    setOptionCount(optionCount + 1);
  };

  const showOptons = () => {
    const options = Array.from({ length: optionCount }, (_, index) => (
      <FlexBox key={index} className="items-center gap-2">
        <Icon src="/icon/control/plus.svg" sz={24} onClick={addOptionCount} />
        <input
          placeholder="옵션 추가"
          className="w-full outline-none text-Gray4 B3-regular"
        />
      </FlexBox>
    ));

    return options;
  };

  return (
    <>
      <FlexBox direction="col" className="gap-[18px] p-4 w-full">
        <input
          placeholder="옵션 이름 입력"
          className="w-full text-Black B1-medium placeholder:text-Black outline-none"
        />
        <div className="grid grid-cols-2 w-full gap-y-4">{showOptons()}</div>
      </FlexBox>
      <Divider height={8} />
    </>
  );
}
