import Icon from "../../layout/Icon";
import FlexBox from "../../layout/FlexBox";

/**
 * AdminSettingBanner 컴포넌트는 권한 설정 배너 컴포넌트입니다.
 * @param onClick 배너 클릭 시 실행되는 함수를 입력합니다.
 * @returns {JSX.Element} AdminSettingBanner 컴포넌트를 반환합니다.
 * @example <AdminSettingBanner onClick={() => console.log("권한 설정")} />
 */
export default function AdminSettingBanner({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="w-full">
      <div className="w-full h-[60px] pl-4 pr-2.5 py-3 bg-white rounded-lg border border-Gray5">
        <FlexBox className="w-full h-full justify-between">
          <FlexBox
            direction="col"
            className="h-full justify-between items-start"
          >
            <div className="B5-medium text-Gray5">권한 설정</div>
            <div className="B4-medium text-Gray7">
              관리자를 등록해 편리하게 가게를 운영하세요
            </div>
          </FlexBox>
          <Icon src="/icon/direction/right.svg" sz={24} />
        </FlexBox>
      </div>
    </button>
  );
}
