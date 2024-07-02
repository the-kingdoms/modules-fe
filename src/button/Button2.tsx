export interface TestButton2Props {
  size: "L" | "M" | "S" | "full";
  className?: string;
  text: string;
  type?: "primary" | "secondary" | "border" | "danger" | "disabled";
  isClicked?: boolean;
  inactive?: boolean;
  onClick?: () => void;
}

export const size2Style = {
  full: "w-full",
  L: "w-[328px]",
  M: "w-[160px]",
  S: "w-[120px]",
};

const button2Style = {
  primary: {
    hover: "bg-Hover-Black",
    active: "bg-Gray-90",
    inactive: "bg-Gray-30",
    clicked: "bg-Black text-Gray-30",
  },
  secondary: {
    active: "bg-white border-2 border-Black text-Black",
    inactive: "bg-white border-2 border-Gray-40 text-Gray-30",
    clicked: "bg-Gray-30 border-2 border-Gray-80 text-Gray-80",
  },
  border: {
    default: "bg-Gray-40",
    hover: "bg-Hover-Gray-40",
    active: "bg-Black",
    inactive: "bg-Gray-30",
    clicked: "bg-Gray-30 border-2 border-Gray-40 text-Gray-40",
  },
  danger: {
    default: "bg-Blue-30",
    hover: "bg-Hover-Blue-30",
    active: "bg-Blue-40",
    clicked: "bg-Gray-30 border-2 border-Gray-40 text-Gray-40",
    inactive: "bg-Gray-30",
  },
  disabled: {
    active: "bg-Blue-80",
    clicked: "bg-Gray-30 border-2 border-Gray-40 text-Gray-40",
    inactive: "bg-Gray-30",
  },
};

export default function TestButton2({
  size,
  className,
  text,
  type = "primary",
  isClicked,
  inactive,
  onClick,
}: TestButton2Props) {
  const clickHandle = () => {
    if (inactive) return;
    onClick && onClick();
  };

  const stateClass =
    inactive && button2Style[type].inactive
      ? button2Style[type].inactive
      : isClicked && button2Style[type].clicked
        ? button2Style[type].clicked
        : button2Style[type].active;
  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-lg h-[36px] ${
        size2Style[size]
      } ${stateClass} ${className}`}
      onClick={clickHandle}
    >
      <div className="B5-medium">{text}</div>
    </button>
  );
}
