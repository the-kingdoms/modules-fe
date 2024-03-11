import { useRouter } from "next/router";
import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

type TabStatus = "main" | "manage" | "mypage";
const text = {
  main: "홈",
  manage: "직원관리",
  mypage: "마이",
};

interface StatusProps {
  type: TabStatus;
  selected: boolean;
  onClick: () => void;
}

function TabIcon({ type, selected }: { type: TabStatus; selected: boolean }) {
  if (selected)
    switch (type) {
      case "main":
        return <Icon src="/icon/bars/gage/main_black.png" sz={32} />;
      case "manage":
        return <Icon src="/icon/bars/gage/manage_black.png" sz={32} />;
      case "mypage":
        return <Icon src="/icon/bars/gage/my_black.png" sz={32} />;
      default:
        return null;
    }
  else
    switch (type) {
      case "main":
        return <Icon src="/icon/bars/gage/main_gray.png" sz={32} />;
      case "manage":
        return <Icon src="/icon/bars/gage/manage_gray.png" sz={32} />;
      case "mypage":
        return <Icon src="/icon/bars/gage/my_gray.png" sz={32} />;
      default:
        return null;
    }
}

function Status({ type, selected, onClick }: StatusProps) {
  return (
    <button type="button" onClick={onClick} className="w-1/3 cursor-pointer">
      <FlexBox direction="col">
        <TabIcon type={type} selected={selected} />
        <div className={`C3 ${selected ? "text-Black" : "text-Gray5"}`}>
          {text[type]}
        </div>
      </FlexBox>
    </button>
  );
}

export default function TabBarGage() {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  const selectHandle = (type: TabStatus) => {
    router.push(`/${type}`);
  };

  return (
    <div className="w-[360px] fixed bottom-0 pb-8 pt-5 bg-white border-t">
      <FlexBox className="justify-between">
        {["main", "manage", "mypage"].map((type, index) => {
          return (
            <Status
              key={index}
              type={type as TabStatus}
              selected={type === path}
              onClick={() => selectHandle(type as TabStatus)}
            />
          );
        })}
      </FlexBox>
    </div>
  );
}
