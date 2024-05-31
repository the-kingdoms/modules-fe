import * as icons from "./svg";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  /**
   * 아이콘 타입
   */
  icon: IconType;
  /**
   * 아이콘 크기
   */
  size?: number;
  className?: string;
};

/**
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props를 사용하여 아이콘의 크기와 스타일을 정의 할 수 있습니다.
 */

const Icon = ({ icon, size, className }: IconProps) => {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon className={className} width={size ?? 24} height={size ?? 24} />
  );
};

export default Icon;
