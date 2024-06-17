import * as Commerce from "./svg/commerce";
import * as Control from "./svg/control";

export const IconCategory = {
  Commerce: { ...Commerce },
  Control: { ...Control },
};

const icons = {
  ...Commerce,
  ...Control,
};

export type iconKey = keyof typeof icons;

type IconProps = {
  /**
   * 아이콘 타입
   */
  icon: iconKey;
  /**
   * 아이콘 크기
   */
  size?: number;
  className?: string;
};

/**
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props를 사용하여 아이콘의 크기와 스타일을 정의 할 수 있습니다.
 */

const Icon = ({ icon, size = 24, className }: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon className={className} width={size ?? 24} height={size ?? 24} />
  );
};

export default Icon;
