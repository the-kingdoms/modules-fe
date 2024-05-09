import { useState } from "react";
import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

interface TextFieldProps {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  assistText?: string;
  className?: string;
  isError?: boolean;
  button?: React.ReactNode;
}

/**
 * TextField 컴포넌트는 얼루가의 텍스트 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 텍스트 필드의 값 (state)
 * @param setValue - 텍스트 필드의 값 변경 함수 (setState)
 * @param label - 텍스트 필드의 레이블
 * @param assistText - 텍스트 필드의 보조 텍스트
 * @param className - 텍스트 필드의 클래스, 없을 경우 B3-regular로 설정됩니다
 * @param isError - 텍스트 필드의 에러 여부, true일 경우 빨간색으로 표시됩니다.
 * @param button - 텍스트 필드의 오른쪽에 위치할 버튼, ReactNode로 받습니다.
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
export default function TextField({
  value,
  setValue,
  label,
  assistText,
  className,
  isError,
  button,
  ...props
}: TextFieldProps & JSX.IntrinsicElements["input"]) {
  const [focus, setFocus] = useState<boolean>(false);

  const onClickCancel = () => {
    setValue && setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e.target.value);
    props.onChange && props.onChange(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(true);
    props.onFocus && props.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };

  return (
    <FlexBox direction="col" className="w-full gap-1">
      {label && (
        <label
          className="B4-regular leading-[16px] w-full text-Gray6"
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <FlexBox
        className={`w-full justify-between h-[56px] border-b-2 ${
          isError ? "border-Red" : focus ? "border-Black" : "border-Gray3"
        }`}
      >
        <input
          {...props}
          className={`w-full h-full bg-transparent outline-none ${
            isError ? "text-Red" : focus ? "text-black" : "text-Gray5"
          } ${className || "B3-regular"} placeholder:text-Gray3`}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {button}
        {!button && focus && (
          <Icon
            src={`/icon/textfields/close_${isError ? "red" : "black"}.png`}
            alt="x"
            sz={20}
            className="cursor-pointer"
            onClick={onClickCancel}
          />
        )}
      </FlexBox>
      {assistText && (
        <p
          className={`w-full C2 leading-[16px] ${
            isError ? "text-Red" : focus ? "text-Gray7" : "text-Gray5"
          }`}
        >
          {assistText}
        </p>
      )}
    </FlexBox>
  );
}
