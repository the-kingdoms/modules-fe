import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

const styleBySize = {
  S: "px-[8px] py-[4px]",
  M: "px-[8px] py-[4px] gap-[2px]",
  L: "px-[16px] py-[6px] gap-[4px]",
};

const textStyleBySize = {
  S: "B5-regular",
  M: "B5-regular",
  L: "B4-regular",
};

const styleByActive = {
  active: "bg-Black border-Black",
  inactive: "bg-white border-Gray2",
};

const textStyleByActive = {
  active: "text-White",
  inactive: "text-Gray4",
};

const pixelSize = {
  S: 0,
  M: 12,
  L: 16,
};

interface Props {
  size: "S" | "M" | "L";
  text: string;
  src?: string;
  className?: string;
  inactive?: boolean;
  onChipClick?: () => void;
}

/**
 * TextChip 컴포넌트는 텍스트를 나타내는 칩입니다.
 * @param size 칩의 크기 (S | M | L)
 * @param text 칩의 텍스트
 * @param src 칩의 왼쪽에 위치할 아이콘의 경로. size가 L 또는 M일 때만 사용됩니다. 없을 경우 아이콘은 표시되지 않습니다.
 * @param className 칩의 클래스
 * @param inactive 칩의 비활성화 여부. true일 경우 흰 배경, 회색 텍스트로 표시됩니다.
 * @param onChipClick 칩을 클릭했을 때 실행할 함수
 * @returns
 * @example <TextChip size="L" src="/icon/sample.svg" text="텍스트" />
 */
export default function TextChip({
  size,
  text,
  src,
  className,
  inactive,
  onChipClick,
}: Props) {
  const active = inactive ? "inactive" : "active";
  return (
    <button type="button" className="shrink-0" onClick={onChipClick}>
      <FlexBox
        className={`w-fit rounded-full border border-1 ${className} ${styleBySize[size]} ${styleByActive[active]}`}
      >
        {(size === "L" || size === "M") && src && (
          <Icon src={src} sz={pixelSize[size]} />
        )}
        <div
          className={`${textStyleBySize[size]} ${textStyleByActive[active]}`}
        >
          {text}
        </div>
      </FlexBox>
    </button>
  );
}
