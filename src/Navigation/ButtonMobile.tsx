import { useState } from "react";
import Divider from "src/Layout/Divider";
import Icon, { iconKey, icons } from "src/icon/Icon";

export interface ButtonPropsMobile {
  size: "L" | "M";
  style:
    | "primary"
    | "secondary"
    | "border" 
    | "ghost"
    | "danger_primary"
    | "danger_border"
    | "danger_ghost"
    | "elevated_primiary";
  type: "text" | "text-text" | "icon" | "icon-left" | "icon-right";
  state: "enabled" | "disabled";
  round?: boolean;
  text1: string;
  text2?: string;
  iconKey?: iconKey;
  onClick?: () => void;
  className?: string; // 임시 방편 수정
}

export const buttonSize = {
  iconOnly: {
    L: "w-[64px] h-[64px] p-spacing-05 gap-spacing-04 flex justify-center items-center",
    M: "w-[40px] h-[40px] p-spacing-04 gap-spacing-02 flex justify-center items-center",
  },
  withText: {
    L: "w-full h-[64px] py-spacing-05 px-spacing-07 gap-spacing-04 flex justify-center items-center",
    M: "w-full h-[40px] px-spacing-04 py-spacing-03 gap-spacing-02 flex justify-center items-center",
  },
};

export const buttonLabel = {
  L: "label-03-bold",
  M: "label-02-bold",
};

export const buttonStyleMobile = {
  primary: {
    enabled: "bg-button-primary text-text-on-color",
    hover: "bg-button-primary-hover text-text-on-color",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-primary-active text-text-on-color m-[-1px]",
  },
  secondary: {
    enabled: "bg-button-secondary text-text-secondary",
    hover: "bg-button-secondary-hover text-text-secondary",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-secondary text-text-secondary m-[-1px]",
  },
  danger_primary: {
    enabled: "bg-button-danger text-text-on-color",
    hover: "bg-button-danger-hover text-text-on-color hover",
    disabled: "bg-button-disabled text-text-on-color-disabled",
    active:
      "border border-border-strong-01 bg-button-danger text-text-on-color m-[-1px]",
  },
  danger_border: {
    enabled: "border border-button-danger text-text-error m-[-1px]",
    hover:
      "border border-strong-selected-01 bg-button-danger-hover text-text-on-color-hover m-[-1px]",
    disabled: "border border-disabled text-text-disabled m-[-1px]",
    active:
      "border border-border-strong-selected-01 bg-button-danger text-text-on-color m-[-1px]",
  },
  danger_ghost: {
    enabled: "text-text-error",
    hover: "bg-background-hover text-text-error",
    disabled: "text-text-disabled",
    active: "border border-border-error text-text-error m-[-1px]",
  },
  border: {
    enabled: "border border-button-border text-text-secondary m-[-1px]",
    hover:
      "border border-button-border-hover bg-button-primary-hover text-text-on-color-hover m-[-1px]",
    disabled: "border border-border-disabled text-text-disabled m-[-1px]",
    active:
      "border border-border-strong-selected-01 bg-button-primary text-text-on-color m-[-1px]",
  },

  ghost: {
    enabled: "text-text-primary",
    hover: "bg-text-Gray-50",
    disabled: "text-text-disabled",
    active: "border-2 border-Gray-90 text-text-primary m-[-2px]",
  },

  elevated_primiary: {
    enabled: "bg-button-primary text-text-on-color shadow-elevation-light-1",
    hover:
      "bg-button-primary-hover text-text-on-color shadow-elevation-light-1",
    disabled:
      "bg-button-disabled text-text-on-color-disabled shadow-elevation-light-1",
    active:
      "border border-border-strong-selected-01 bg-button-primary text-text-on-color shadow-elevation-light-1 m-[-1px]",
  },
};

const buttonIconColors = {
  primary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color-hover",
    focus: "fill-text-on-color active",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
  secondary: {
    enabled: "fill-text-secondary",
    hover: "fill-text-secondary",
    focus: "fill-text-secondary",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-secondary",
  },
  danger_primary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color hover",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
  danger_border: {
    enabled: "fill-text-error",
    hover: "fill-text-on-color-hover",
    disabled: "fill-text-disabled",
    active: "fill-text-on-color",
  },
  danger_ghost: {
    enabled: "fill-text-error",
    hover: "fill-text-error",
    disabled: "fill-text-disabled",
    active: "fill-text-error",
  },
  border: {
    enabled: "fill-text-secondary",
    hover: "fill-text-on-color-hover",
    focus: "fill-text-on-color active",
    disabled: "fill-text-disabled",
    active: "fill-text-on-color",
  },
  ghost: {
    enabled: "fill-text-primary",
    hover: "fill-text-primary",
    focus: "fill-text-primary",
    disabled: "fill-text-disabled",
    active: "fill-text-primary",
  },
  elevated_primiary: {
    enabled: "fill-text-on-color",
    hover: "fill-text-on-color",
    disabled: "fill-text-on-color-disabled",
    active: "fill-text-on-color",
  },
};

const dividerColors = {
  primary: {
    enabled: "bg-Gray-50",
    active: "shrink-0 bg-Gray-50",
    disabled: "bg-Gray-50",
  },
  secondary: {
    enabled: "bg-Gray-50",
    active: "shrink-0 bg-Gray-50",
    disabled: "bg-Gray-50",
  },
  border: {
    enabled: "shrink-0 bg-Gray-50",
    active: "shrink-0 bg-Gray-50",
    disabled: "shrink-0 bg-Gray-30",
  },
  ghost: {
    enabled: "bg-Gray-50",
    active: "shrink-0 bg-Gray-50",
    disabled: "bg-Gray-30",
  },
  danger_primary: {
    enabled: "bg-Gray-20",
    active: "shrink-0 bg-Gray-20",
    disabled: "bg-Gray-20",
  },
  danger_border: {
    enabled: "shrink-0 bg-Red-60",
    active: "shrink-0 bg-Gray-20",
    disabled: "shrink-0 bg-Gray-30",
  },
  danger_ghost: {
    enabled: "bg-Gray-20",
    active: "shrink-0 bg-Gray-20",
    disabled: "bg-Gray-30",
  },
  elevated_primiary: {
    enabled: "bg-Gray-50",
    active: "shrink-0 Gray-50",
    disabled: "bg-Gray-50",
  },
};

export default function ButtonMobile({
  size = "L",
  style = "primary",
  type = "text",
  state = "enabled",
  round = false,
  text1 = "Text1",
  text2 = "Text2",
  iconKey,
  onClick,
  className, // 임시 방편 수정
}: ButtonPropsMobile) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    if (state === "enabled") {
      setIsPressed(true); // 버튼이 눌렸을 때
    }
  };

  const handleMouseUp = () => {
    if (isPressed) {
      setIsPressed(false); // 마우스를 떼면 원래 상태로 복구
    }
  };

  const buttonType = type === "icon" ? "iconOnly" : "withText";
  const sizeClass = buttonSize[buttonType][size];
  const labelClass = buttonLabel[size];
  const styleClass = isPressed
    ? buttonStyleMobile[style]["active"]
    : buttonStyleMobile[style][state];
  const roundClass =
    style === "ghost" && isPressed
      ? ""
      : round
        ? "rounded-radius-circle"
        : "rounded-radius-04";
  const dividerColor = dividerColors[style][isPressed ? "active" : state];
  const iconColor = buttonIconColors[style][isPressed ? "active" : state];

  return ( // className 임시 방편 수정
    <div className={className}>
    <button
      className={`flex ${labelClass} ${sizeClass} ${styleClass} ${roundClass}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onClick}
      disabled={state === "disabled"}
    >
      {type === "icon-left" && (
        <span className="left-icon">
          <Icon
            icon={iconKey as keyof typeof icons}
            className={`${iconColor}`}
          />
        </span>
      )}
      {type === "icon-left" && <span className="shrink-0">{text1}</span>}
      {type === "icon-right" && <span className="shrink-0">{text1}</span>}
      {type === "icon-right" && (
        <span className="right-icon">
          <Icon
            icon={iconKey as keyof typeof icons}
            className={`${iconColor}`}
          />
        </span>
      )}
      {type === "text" && <span className="shrink-0">{text1}</span>}
      {type === "text-text" && <span className="shrink-0">{text1}</span>}
      {type === "text-text" && (
        <Divider type="Vertical" size={16} className={dividerColor} />
      )}
      {type === "text-text" && <span className="shrink-0">{text2}</span>}
      {type === "icon" && (
        <span className="icon">
          <Icon
            icon={iconKey as keyof typeof icons}
            className={`${iconColor}`}
          />
        </span>
      )}
    </button>
    </div>
  );
}
