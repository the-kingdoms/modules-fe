import Icon from "src/icon/Icon";
import { useState } from "react";
import { iconKey } from "src/icon/Icon";
import { InputStateType } from "src/Input/type";

export interface ChipProps {
  size: "L" | "M" | "S";
  state: "enable" | "disabled"; // Omit<InputStateType, "warning" | "error" | "readOnly">; 반영 안되는 부분 수정 필요
  dismissible: boolean;
  label: string;
  color:
    | "black"
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "cyan"
    | "magenta"
    | "purple"
    | "teal"
    | "outline";
  icon?: iconKey;
  readOnly: boolean;
}

const sizeStyles = {
  L: {
    iconSize: 20,
    Detail: "label-03-bold py-spacing-02 px-spacing-04 gap-0.5",
  },
  M: {
    iconSize: 16,
    Detail: "label-02-bold py-spacing-02 px-spacing-03 gap-spacing-01",
  },
  S: {
    iconSize: 14,
    Detail: "label-01-bold py-spacing-01 px-spacing-02 gap-spacing-01",
  },
};

const DisableColorStyles = {
  iconColor: "fill-icon-disabled",
  textColor: "text-text-disabled",
  bgColor: "bg-tag-background-disabled",
  borderColor: "border border-disabled",
  bgHoverColor: "",
};

const EnableColorStyles = {
  black: {
    iconColor: "fill-tag-icon-black",
    textColor: "text-tag-color-black",
    bgColor: "bg-tag-background-black",
    bgHoverColor: "hover:bg-tag-hover-black",
    borderColor: "border border-tag-border-black",
  },
  gray: {
    iconColor: "fill-tag-icon-gray",
    textColor: "text-tag-color-gray",
    bgColor: "bg-tag-background-gray",
    bgHoverColor: "hover:bg-tag-hover-gray",
    borderColor: "border border-tag-border-gray",
  },
  red: {
    iconColor: "fill-tag-icon-red",
    textColor: "text-tag-color-red",
    bgColor: "bg-tag-background-red",
    bgHoverColor: "hover:bg-tag-hover-red",
    borderColor: "border border-tag-border-red",
  },
  orange: {
    iconColor: "fill-tag-icon-orange",
    textColor: "text-tag-color-orange",
    bgColor: "bg-tag-background-orange",
    bgHoverColor: "hover:bg-tag-hover-orange",
    borderColor: "border border-tag-border-orange",
  },
  yellow: {
    iconColor: "fill-tag-icon-yellow",
    textColor: "text-tag-color-yellow",
    bgColor: "bg-tag-background-yellow",
    bgHoverColor: "hover:bg-tag-hover-yellow",
    borderColor: "border border-tag-border-yellow",
  },
  green: {
    iconColor: "fill-tag-icon-green",
    textColor: "text-tag-color-green",
    bgColor: "bg-tag-background-green",
    bgHoverColor: "hover:bg-tag-hover-green",
    borderColor: "border border-tag-border-green",
  },
  blue: {
    iconColor: "fill-tag-icon-blue",
    textColor: "text-tag-color-blue",
    bgColor: "bg-tag-background-blue",
    bgHoverColor: "hover:bg-tag-hover-blue",
    borderColor: "border border-tag-border-blue",
  },
  cyan: {
    iconColor: "fill-tag-icon-cyan",
    textColor: "text-tag-color-cyan",
    bgColor: "bg-tag-background-cyan",
    bgHoverColor: "hover:bg-tag-hover-cyan",
    borderColor: "border border-tag-border-cyan",
  },
  magenta: {
    iconColor: "fill-tag-icon-magenta",
    textColor: "text-tag-color-magenta",
    bgColor: "bg-tag-background-magenta",
    bgHoverColor: "hover:bg-tag-hover-magenta",
    borderColor: "border border-tag-border-magenta",
  },
  purple: {
    iconColor: "fill-tag-icon-purple",
    textColor: "text-tag-color-purple",
    bgColor: "bg-tag-background-purple",
    bgHoverColor: "hover:bg-tag-hover-purple",
    borderColor: "border border-tag-border-purple",
  },
  teal: {
    iconColor: "fill-tag-icon-teal",
    textColor: "text-tag-color-teal",
    bgColor: "bg-tag-background-teal",
    bgHoverColor: "hover:bg-tag-hover-teal",
    borderColor: "border border-tag-border-teal",
  },
  outline: {
    iconColor: "fill-tag-icon-outline",
    textColor: "text-tag-color-outline",
    bgColor: "bg-tag-background-outline",
    bgHoverColor: "hover:bg-tag-hover-outline",
    borderColor: "border border-tag-border-outline",
  },
};

export default function Chip({
  size,
  state,
  dismissible,
  label,
  icon,
  color,
  readOnly,
}: ChipProps) {
  const [isVisible, setIsVisible] = useState(true);

  const colorStyle =
    state === "enable" ? EnableColorStyles[color] : DisableColorStyles;
  const sizeStyle = sizeStyles[size];

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className={`rounded-full
      ${colorStyle.bgColor} ${colorStyle.textColor} ${colorStyle.bgHoverColor}
     ${
       state === "enable" && color !== "outline" && readOnly
         ? ""
         : state == "disabled" && color === "outline"
           ? ""
           : colorStyle.borderColor
     }
     `}
      >
        <div className={`flex flex-row p-px ${sizeStyle.Detail}`}>
          {icon && (
            <Icon
              icon={icon}
              size={sizeStyle.iconSize}
              className={colorStyle.iconColor}
            />
          )}
          {label}
          {dismissible && (
            <button onClick={handleClose}>
              <Icon
                icon={"close"}
                size={sizeStyle.iconSize}
                className={colorStyle.iconColor}
              />
            </button>
          )}
        </div>
      </div>
    )
  );
}
