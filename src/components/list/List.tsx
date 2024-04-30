import Image from "next/image";
import { useState } from "react";

export default function List() {
  const [visible, setVisible] = useState(false);

  const clickHandle = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      <div className="flex w-[94px] items-center h-fit px-[8px] py-[4px] box-border gap-[4px] bg-White ">
        <div className="B4-medium text-Gray4 ">평점 순</div>
        {visible ? (
          <Image
            className="ml-[4px]"
            src="/icon/control/directionUnder.svg"
            alt="directionUnder"
            onClick={clickHandle}
            width={24}
            height={24}
          />
        ) : (
          <Image
            className="ml-[4px]"
            src="/icon/control/directionTop.svg"
            onClick={clickHandle}
            alt="directionTop"
            width={24}
            height={24}
          />
        )}
      </div>
      {!visible ? (
        <div className="flex flex-col justify-center items-center w-[94px] h-fit px-[11px] py-[8px] box-border bg-White absolute border-t-[1px] border-Gray2">
          <div className="B4-regular text-Gray4 ">최신 순</div>
        </div>
      ) : null}
    </div>
  );
}
