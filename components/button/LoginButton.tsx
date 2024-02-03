import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

interface LoginButtonProps {
  type: "google" | "naver";
  onClick: () => void;
}

const style = {
  google: "bg-White border border-Gray3",
  naver: "bg-[#03C75A]",
};

const textStyle = {
  google: "text-Gray4",
  naver: "text-White",
};

const text = {
  google: "구글로 계속하기",
  naver: "네이버로 계속하기",
};

const src = {
  google: "/icon/login/google.png",
  naver: "/icon/login/naver.png",
};

export default function LoginButton({ type, onClick }: LoginButtonProps) {
  return (
    <button
      type="button"
      className={`flex w-full h-[48px] justify-center items-center gap-8 rounded-full ${style[type]}`}
      onClick={onClick}
    >
      <FlexBox className={`${textStyle[type]} B3-regular`}>
        <Icon src={src[type]} sz={20} className="mr-[8px]" />
        {text[type]}
      </FlexBox>
    </button>
  );
}
