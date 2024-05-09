import { useState } from "react";
import FlexBox from "../../layout/FlexBox";
import Icon from "../../layout/Icon";

type TabStatus = "main" | "menu" | "review" | "news";
const text = {
  main: "홈",
  menu: "메뉴관리",
  review: "리뷰관리",
  news: "소식관리",
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
        return <Icon src="/icon/bars/ceo/main_black.png" sz={32} />;
      case "menu":
        return <Icon src="/icon/bars/ceo/menu_black.png" sz={32} />;
      case "review":
        return <Icon src="/icon/bars/ceo/review_black.png" sz={32} />;
      case "news":
        return <Icon src="/icon/bars/ceo/news_black.png" sz={32} />;
      default:
        return null;
    }
  else
    switch (type) {
      case "main":
        return <Icon src="/icon/bars/ceo/main_gray.png" sz={32} />;
      case "menu":
        return <Icon src="/icon/bars/ceo/menu_gray.png" sz={32} />;
      case "review":
        return <Icon src="/icon/bars/ceo/review_gray.png" sz={32} />;
      case "news":
        return <Icon src="/icon/bars/ceo/news_gray.png" sz={32} />;
      default:
        return null;
    }
}

function Status({ type, selected, onClick }: StatusProps) {
  return (
    <button type="button" onClick={onClick} className="cursor-pointer">
      <FlexBox direction="col">
        <TabIcon type={type} selected={selected} />
        <div className={`C3 ${selected ? "text-Black" : "text-Gray5"}`}>
          {text[type]}
        </div>
      </FlexBox>
    </button>
  );
}

export default function TabBarCeo() {
  const [selectedTab, setSelectedTab] = useState<TabStatus>("main");

  const selectHandle = (type: TabStatus) => {
    setSelectedTab(type);
  };

  return (
    <div className="w-full sticky bottom-0 pb-8 pt-5 px-4 bg-white border-t">
      <FlexBox className="justify-between gap-2">
        <Status
          type="main"
          selected={selectedTab === "main"}
          onClick={() => selectHandle("main")}
        />
        <Status
          type="menu"
          selected={selectedTab === "menu"}
          onClick={() => selectHandle("menu")}
        />
        <Status
          type="review"
          selected={selectedTab === "review"}
          onClick={() => selectHandle("review")}
        />
        <Status
          type="news"
          selected={selectedTab === "news"}
          onClick={() => selectHandle("news")}
        />
      </FlexBox>
    </div>
  );
}
