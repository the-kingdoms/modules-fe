import Checkbox from "@modules/components/selections/Checkbox";
import { useEffect, useRef, useState } from "react";
import FlexBox from "../../layout/FlexBox";

interface TextCheckFieldProps {
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  ischecked?: boolean;
  setIschecked?: React.Dispatch<React.SetStateAction<boolean>>;
  inactive?: boolean;
}

/**
 * TextCheckField 컴포넌트는 얼루가의 텍스트 체크 필드를 구현한 컴포넌트입니다.
 * useState를 통해 value와 setValue를 받아서 사용합니다.
 * @param value - 텍스트 필드의 값 (state)
 * @param setValue - 텍스트 필드의 값 변경 함수 (setState)
 * @param inactive - 비활성화 상태일 경우 true로 설정합니다.
 * @param props - html input의 모든 속성을 받습니다.
 * @returns
 */
export default function TextCheckField({
  value,
  setValue,
  ischecked,
  setIschecked,
  inactive,
  ...props
}: TextCheckFieldProps & JSX.IntrinsicElements["textarea"]) {
  const [height, setHeight] = useState<string>("0px");
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
    setHeight(
      `${ref.current?.scrollHeight ? ref.current?.scrollHeight : "0"}px`,
    );
  }, [focus]);

  const handleFocus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocus(false);
    props.onBlur && props.onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue && setValue(e.target.value);
    props.onChange && props.onChange(e);
    setHeight(
      `${ref.current?.scrollHeight ? ref.current?.scrollHeight : "0"}px`,
    );
  };

  return (
    <FlexBox className="w-full justify-between py-3 px-4 bg-Gray1 rounded-lg">
      <button
        type="button"
        onClick={handleFocus}
        className="h-full w-full flex flex-col justify-center cursor-text"
      >
        {focus ? (
          <textarea
            {...props}
            ref={ref}
            className={`${focus ? "visible" : "invisible"} !leading-[22px]
            B3-medium text-black w-full break-words bg-transparent outline-none overflow-hidden`}
            value={value}
            onChange={handleChange}
            onFocus={e => {
              e.target.selectionStart = e.target.value.length;
              props.onFocus && props.onFocus(e);
            }}
            onBlur={handleBlur}
            style={{ height }}
            placeholder=""
          />
        ) : (
          <FlexBox direction="col" className="w-full gap-2 items-start">
            {(value || props.placeholder)?.split("\n")?.map((line, index) => {
              if (index === 0)
                return (
                  <div
                    className={`B3-medium ${inactive || !value ? "text-Gray5" : "text-black"}`}
                  >
                    {(value || props.placeholder)?.split("\n")[0]}
                  </div>
                );
              return (
                <div
                  key={index}
                  className={`B4-regular ${inactive || !value ? "text-Gray4" : "text-Gray5"}`}
                >
                  {line}
                </div>
              );
            })}
          </FlexBox>
        )}
      </button>
      <FlexBox className="shrink-0">
        <Checkbox
          type="round"
          color="black"
          size="L"
          checked={ischecked}
          onClick={() => {
            setIschecked && setIschecked(!ischecked);
          }}
        />
      </FlexBox>
    </FlexBox>
  );
}
