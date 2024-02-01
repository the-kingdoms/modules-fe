import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";
import { useState } from "react";

interface SearchFieldProps {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  onSearch?: () => void;
}

/**
 * SearchField 컴포넌트는 얼루가의 검색 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 검색 필드의 값 (state)
 * @param setValue - 검색 필드의 값 변경 함수 (setState)
 * @param className - 검색 필드의 클래스
 * @param onSearch - 검색 버튼을 눌렀을 때 실행할 함수
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
export default function SearchField({
  value,
  setValue,
  className,
  onSearch,
  ...props
}: SearchFieldProps & JSX.IntrinsicElements["input"]) {
  const [focus, setFocus] = useState(false);

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
    <FlexBox className="relative w-full">
      <input
        {...props}
        className={`w-full h-[40px] leading-[40px] rounded border border-1 border-Gray3 focus:outline-none B4-regular ${
          !focus ? "text-Gray5 pl-8" : "text-black pl-4 pr-16"
        } ${className}`}
        style={
          !focus
            ? {
                backgroundImage: "url(/icon/textfields/search_gray.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "4px center",
                backgroundSize: "auto 24px",
              }
            : { backgroundImage: "none" }
        }
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {focus && (
        <FlexBox className="absolute top-0 w-full h-full px-2 justify-end gap-2">
          <Icon
            src="/icon/textfields/close_black.png"
            className="cursor-pointer"
            onClick={onClickCancel}
            sz={20}
          />
          <Icon
            src="/icon/textfields/search_black.png"
            className="cursor-pointer"
            onClick={onSearch}
            sz={24}
          />
        </FlexBox>
      )}
    </FlexBox>
  );
}
