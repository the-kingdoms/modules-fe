import { useRef, useState } from "react";
import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

interface DropdownProps {
  defaultValue?: string;
  options: string[];
  onChange?: (value: string) => void;
}

/**
 * Dropdown 컴포넌트는 dropdown 형태의 select 컴포넌트입니다.
 * @param defaultValue 드롭다운의 기본값을 입력합니다.
 * @param options 드롭다운의 옵션을 입력합니다.
 * @param onChange 드롭다운의 옵션을 변경했을 때 실행되는 함수를 입력합니다.
 * @returns 드롭다운 컴포넌트를 반환합니다.
 * @example <Dropdown defaultValue="choose option" options={["option1", "option2"]} onChange={value => console.log(value)} />
 */
export default function Dropdown({
  defaultValue,
  options,
  onChange,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onClickDropdown = () => {
    if (!ref.current) return;
    if (isOpen) ref.current.style.maxHeight = "0px";
    else ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
    setIsOpen(!isOpen);
  };
  const onClickOption = (option: string) => () => {
    onClickDropdown();
    setSelectedValue(option);
    onChange && onChange(option);
  };
  return (
    <FlexBox direction="col" className="w-full">
      <button type="button" className="w-full" onClick={onClickDropdown}>
        <FlexBox className="w-full justify-between px-4 py-2 rounded border border-Gray2">
          <span className="B4-regular text-Gray4">{selectedValue}</span>
          <Icon
            src="/icon/direction/down.svg"
            sz={24}
            className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </FlexBox>
      </button>
      <div
        ref={ref}
        className="w-full transition-all bg-Gray5 rounded max-h-0 overflow-hidden"
      >
        <FlexBox direction="col" className="w-full p-1">
          {options.map((option, index) => (
            <button
              type="button"
              key={index}
              className="p-3 w-full text-left"
              onClick={onClickOption(option)}
            >
              <span className="B4-regular text-Gray2">{option}</span>
            </button>
          ))}
        </FlexBox>
      </div>
    </FlexBox>
  );
}
