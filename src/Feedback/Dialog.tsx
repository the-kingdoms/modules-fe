import ButtonMobile from "src/Navigation/ButtonMobile";
import Icon from "src/icon/Icon";

export interface DialogProps {
  open: boolean;
  title: string;
  leftText?: string;
  rightText?: string;
  dismissible?: boolean;
  description?: string;
  label?: string;
  leftOnClick?: () => void;
  rightOnClick?: () => void;
  onClose?: () => void;
}

export default function Dialog({
  open,
  title,
  description,
  leftText,
  rightText,
  dismissible = true,
  leftOnClick,
  rightOnClick,
  label,
  onClose,
}: DialogProps) {
  return (
    open && (
      <div
        className="w-[272px] flex flex-col py-spacing-07 px-spacing-05 bg-white rounded-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-row pb-spacing-04 justify-between items-start">
          <div
            className="flex flex-col gap-spacing-01 body-05-bold
          text-text-primary"
          >
            {label && (
              <div className="label-01-regular text-text-secondary">
                {label}
              </div>
            )}
            {title}
          </div>
          {dismissible && (
            <button onClick={onClose}>
              <Icon icon={"close"} size={24} />
            </button>
          )}
        </div>
        {description && (
          <div className="body-02-regular text-text-primary">
            {description}
          </div>
        )}
        {(leftText || rightText) && (
        <div className="flex flex-row gap-spacing-02 w-full mt-spacing-06">
          {leftText && (
          <ButtonMobile
            size={"M"}
            style={"secondary"}
            type={"text"}
            state={"enabled"}
            text1={leftText}
            onClick={leftOnClick}
          />)}
          {rightText && (
          <ButtonMobile
            size={"M"}
            style={"primary"}
            type={"text"}
            state={"enabled"}
            text1={rightText}
            onClick={rightOnClick}
          />)}
        </div>)}
      </div>
    )
  );
}
