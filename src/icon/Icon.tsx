import * as Commerce from './svg/commerce';
import * as Control from './svg/control';
import * as Data from './svg/data';
import * as File from './svg/file';
import * as Formatting from './svg/formatting';
import * as Modifier from './svg/modifier';
import * as Navigation from './svg/navigation';
import * as Social from './svg/social';
import * as Status from './svg/status';
import * as Operation from './svg/operation';
import * as Technology from './svg/technology';
import * as Time from './svg/time';
import * as Toggle from './svg/toggle';
import * as User from './svg/user';

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

    return <SVGIcon className={className} width={size ?? 24} height={size ?? 24} />;
};

export default Icon;
