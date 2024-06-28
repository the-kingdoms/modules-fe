import * as Commerce from "./svg/Commerce";
import * as Control from "./svg/Control";
import * as Data from "./svg/Data";
import * as File from "./svg/File";
import * as Formatting from "./svg/Formatting";
import * as Modifier from "./svg/Modifier";
import * as Navigation from "./svg/Navigation";
import * as Social from "./svg/Social";
import * as Status from "./svg/Status";
import * as Operation from "./svg/Operation";
import * as Technology from "./svg/Technology";
import * as Time from "./svg/Time";
import * as Toggle from "./svg/Toggle";
import * as User from "./svg/User";

export const IconCategory = {
  Commerce: { ...Commerce },
  Control: { ...Control },
  Data: { ...Data },
  File: { ...File },
  Formatting: { ...Formatting },
  Modifier: { ...Modifier },
  Navigation: { ...Navigation },
  Social: { ...Social },
  Status: { ...Status },
  Operation: { ...Operation },
  Technology: { ...Technology },
  Time: { ...Time },
  Toggle: { ...Toggle },
  User: { ...User },
};

const icons = {
  ...Commerce,
  ...Control,
  ...Data,
  ...File,
  ...Formatting,
  ...Modifier,
  ...Navigation,
  ...Social,
  ...Status,
  ...Operation,
  ...Technology,
  ...Time,
  ...Toggle,
  ...User,
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
