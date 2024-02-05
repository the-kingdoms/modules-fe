interface StateButtonProps {
  type: "approve" | "disapprove" | "decline";
  onclick?: () => void;
}

const style = {
  approve: "bg-Approve text-white",
  disapprove: "bg-Gray5 text-Gray4",
  decline: "bg-Red text-white",
};

export default function StateButton({ type, onclick }: StateButtonProps) {
  const handleClick = () => {
    onclick && onclick();
  };
  return (
    <button
      type="button"
      className={`w-[72px] h-[32px] rounded-lg B5-medium ${style[type]}`}
      onClick={handleClick}
    >
      {type === "approve"
        ? "승인"
        : type === "disapprove"
          ? "미승인"
          : "거절하기"}
    </button>
  );
}
