import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

interface LoginButtonProps {
  type: "google" | "naver" | "kakao" | "apple";
  onClick: () => void;
}

const style = {
  google: "bg-White border border-Gray3",
  naver: "bg-[#03C75A]",
  kakao: "bg-[#FEE500]",
  apple: "bg-[#FFFFFF]",
};

const textStyle = {
  google: "text-Gray4",
  naver: "text-White",
  kakao: "text-Black",
  apple: "text-Black",
};

const text = {
  google: "구글로 계속하기",
  naver: "네이버로 계속하기",
  kakao: "카카오 로그인",
  apple: "Apple로 계속하기",
};

const src = {
  google: "/icon/login/google.png",
  naver: "/icon/login/naver.png",
  kakao: "/icon/login/kakao.png",
  apple: "/icon/login/apple.png",
};

export default function LoginButton({ type, onClick }: LoginButtonProps) {
  return (
    <button
      type="button"
      className={`flex w-full h-[48px] justify-center items-center gap-8 rounded-full ${style[type]}`}
      onClick={onClick}
    >
      <FlexBox className={`${textStyle[type]}`}>
        <Icon src={src[type]} sz={20} className="mr-[8px]" />
        <span className="B3-regular">{text[type]}</span>
      </FlexBox>
    </button>
  );
}
