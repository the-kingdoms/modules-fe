import React, { useEffect, useRef, useState } from "react";
import FlexBox from "../../layout/FlexBox";

interface TextFieldProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * TimeField 컴포넌트는 얼루가의 시간 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 시간 필드의 값 (state), 4자리의 숫자로 구성된 문자열을 넣어야합니다.
 * @param setValue - 시간 필드의 값 변경 함수 (setState)
 * @param className - 시간 필드의 클래스
 * @returns
 */
export default function TimeField({
  value,
  setValue,
  className,
  setIsFocused,
  ...props
}: TextFieldProps & JSX.IntrinsicElements["input"]) {
  const [focus, setFocus] = useState<boolean>(false);
  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const inputRefList = [ref0, ref1, ref2, ref3];

  const handleFocus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRefList[0].current?.focus();
  };

  const handleChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { key } = e;
    if (key === "Backspace") {
      setValue(`${value.slice(0, index)}0${value.slice(index + 1)}`);
      if (index > 0) {
        inputRefList[index].current?.blur();
        inputRefList[index - 1].current?.focus();
      }
      return;
    }
    if (Number.isNaN(Number(key))) {
      setValue(value);
      return;
    }
    setValue(value.slice(0, index) + key + value.slice(index + 1));
    if (index < 3) {
      inputRefList[index].current?.blur();
      inputRefList[index + 1].current?.focus();
    }
  };

  useEffect(() => {
    focus && setIsFocused !== undefined && setIsFocused(true);
    !focus && setIsFocused !== undefined && setIsFocused(false);
  }, [focus]);

  return (
    <FlexBox
      className={`justify-center w-[148px] h-[40px] border border-1 rounded ${
        props.disabled ? "bg-Gray1" : focus ? "bg-black" : "bg-Gray6"
      } ${props.disabled ? "text-Gray3" : focus ? "text-white" : "text-Gray3"}`}
    >
      <button
        type="button"
        className="w-full h-full cursor-text"
        onClick={handleFocus}
      >
        <FlexBox className="justify-center">
          <input
            ref={ref0}
            value={value[0]}
            className="outline-none w-[12px] text-center selection:underline bg-transparent"
            onKeyDown={e => handleChange(e, 0)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <input
            ref={ref1}
            value={value[1]}
            className="outline-none w-[12px] text-center selection:underline bg-transparent"
            onKeyDown={e => handleChange(e, 1)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <span className="mx-1">:</span>
          <input
            ref={ref2}
            value={value[2]}
            className="outline-none w-[12px] text-center selection:underline bg-transparent"
            onKeyDown={e => handleChange(e, 2)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            pattern="[0-9]*"
            inputMode="numeric"
          />
          <input
            ref={ref3}
            value={value[3]}
            className="outline-none w-[12px] text-center selection:underline bg-transparent"
            onKeyDown={e => handleChange(e, 3)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </FlexBox>
      </button>
    </FlexBox>
  );
}
