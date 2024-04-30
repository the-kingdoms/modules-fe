interface StateButtonProps {
  type: "APPROVED" | "DISAPPROVED" | "DECLINED";
  onclick?: () => void;
}

const style = {
  APPROVED: "bg-Approve text-white",
  DISAPPROVED: "bg-Red text-white",
  DECLINED: "bg-Gray5 text-Gray4",
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
      {type === "APPROVED"
        ? "승인"
        : type === "DISAPPROVED"
          ? "거절하기"
          : "미승인"}
    </button>
  );
}
