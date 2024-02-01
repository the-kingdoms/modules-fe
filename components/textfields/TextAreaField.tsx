import FlexBox from "@modules/layout/FlexBox";
import { useRef, useState } from "react";

interface TextFieldProps {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

/**
 * TextAreaField 컴포넌트는 얼루가의 텍스트 에리아 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * 초기 가운데 정렬을 위해 height를 자동으로 조절합니다. (최대 56px, 줄어들지는 않습니다)
 * 40자 이상일 경우 폰트 사이즈가 줄어듭니다.
 * @param value - 텍스트 필드의 값 (state)
 * @param setValue - 텍스트 필드의 값 변경 함수 (setState)
 * @param className - 텍스트 필드의 클래스, 없을 경우 B3-regular로 설정됩니다
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
export default function TextAreaField({
  value,
  setValue,
  className,
  ...props
}: TextFieldProps & JSX.IntrinsicElements["textarea"]) {
  const [height, setHeight] = useState<string>("0px");
  const [fontSize, setFontSize] = useState<string>("B3-medium");
  const [focus, setFocus] = useState<boolean>(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue && setValue(e.target.value);
    props.onChange && props.onChange(e);
    setHeight(
      `${
        ref.current?.scrollHeight && ref.current?.scrollHeight > 56
          ? 56
          : ref.current?.scrollHeight
      }px`,
    );
    if (ref.current?.value?.length && ref.current?.value?.length > 40)
      setFontSize("B4-medium");
    else setFontSize("B3-medium");
  };

  const handleFocus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFocus(true);
    ref.current?.focus();
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };

  return (
    <FlexBox
      direction="col"
      className={`w-full justify-center min-h-[56px] border-b-2 ${
        focus ? "border-Black" : "border-Gray3"
      }`}
    >
      <button
        type="button"
        className="w-full h-full cursor-text"
        onClick={handleFocus}
      >
        <FlexBox className="w-full">
          <textarea
            {...props}
            className={`resize-none w-full break-words bg-transparent outline-none ${
              focus ? "text-Gray4" : "text-Gray3"
            } ${className || fontSize} placeholder:text-Gray3`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            ref={ref}
            style={{ height }}
          />
        </FlexBox>
      </button>
    </FlexBox>
  );
}
