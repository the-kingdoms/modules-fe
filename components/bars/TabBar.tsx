import FlexBox from "@modules/layout/FlexBox";
import Icon from "@modules/layout/Icon";
import { useState } from "react";

type TabStatus = "main" | "feed" | "reels" | "record" | "my";
const text = {
  main: "홈",
  feed: "피드",
  reels: "리얼",
  record: "녹화",
  my: "마이",
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
        return <Icon src="/icon/bars/customer/main_black.png" sz={32} />;
      case "feed":
        return <Icon src="/icon/bars/customer/feed_black.png" sz={32} />;
      case "reels":
        return <Icon src="/icon/bars/customer/reels_black.png" sz={32} />;
      case "record":
        return <Icon src="/icon/bars/customer/record_black.png" sz={32} />;
      case "my":
        return <Icon src="/icon/bars/customer/my_black.png" sz={32} />;
      default:
        return null;
    }
  else
    switch (type) {
      case "main":
        return <Icon src="/icon/bars/customer/main_gray.png" sz={32} />;
      case "feed":
        return <Icon src="/icon/bars/customer/feed_gray.png" sz={32} />;
      case "reels":
        return <Icon src="/icon/bars/customer/reels_gray.png" sz={32} />;
      case "record":
        return <Icon src="/icon/bars/customer/record_gray.png" sz={32} />;
      case "my":
        return <Icon src="/icon/bars/customer/my_gray.png" sz={32} />;
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

export default function TabBar() {
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
          type="feed"
          selected={selectedTab === "feed"}
          onClick={() => selectHandle("feed")}
        />
        <Status
          type="reels"
          selected={selectedTab === "reels"}
          onClick={() => selectHandle("reels")}
        />
        <Status
          type="record"
          selected={selectedTab === "record"}
          onClick={() => selectHandle("record")}
        />
        <Status
          type="my"
          selected={selectedTab === "my"}
          onClick={() => selectHandle("my")}
        />
      </FlexBox>
    </div>
  );
}
