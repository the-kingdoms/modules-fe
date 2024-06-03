import { atom, useAtom } from "jotai";
import FlexBox from "../layout/FlexBox";

const dialogAtom = atom<JSX.Element | null>(null);
dialogAtom.debugLabel = "dialogAtom";

interface DialogProps {
  title: string;
  discription: string;
  type: "confirm" | "notice";
  onAction?: () => void;
  onClose?: () => void;
}

function DialogTemplate({
  title,
  discription,
  type,
  onAction,
  onClose,
}: DialogProps) {
  return (
    <FlexBox className="fixed inset-0 z-[100] justify-center bg-Dialog">
      <div className="w-[242px] mx-auto rounded-lg overflow-y-auto bg-white">
        <FlexBox direction="col" className="gap-4 text-Gray4 px-6 py-6">
          <div className="B3-medium">{title}</div>
          <div className="B4-medium text-center">
            {discription.split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        </FlexBox>
        <FlexBox direction="col" className="gap-4 py-3 border-t border-Gray2">
          {type === "notice" ? (
            <button
              type="button"
              className="w-full B4-regular text-Gray5"
              onClick={onClose}
            >
              확인
            </button>
          ) : (
            <>
              <button
                type="button"
                className="w-full B4-regular text-Red"
                onClick={onAction}
              >
                삭제
              </button>
              <button
                type="button"
                className="w-full B4-regular text-Gray5"
                onClick={onClose}
              >
                취소
              </button>
            </>
          )}
        </FlexBox>
      </div>
    </FlexBox>
  );
}

interface UseDialogType {
  dialog: JSX.Element | null;
  openDialog: (props: DialogProps) => void;
  closeDialog: () => void;
}

function useDialog(): UseDialogType {
  const [dialog, setDialog] = useAtom(dialogAtom);
  const closeDialog = () => {
    setDialog(null);
  };
  const openDialog = (props: DialogProps) => {
    const onClickAction = () => {
      props.onAction?.();
      closeDialog();
    };
    const onClickClose = () => {
      props.onClose?.();
      closeDialog();
    };
    setDialog(
      <DialogTemplate
        {...props}
        onAction={onClickAction}
        onClose={onClickClose}
      />,
    );
  };
  return { dialog, openDialog, closeDialog };
}

export default useDialog;
