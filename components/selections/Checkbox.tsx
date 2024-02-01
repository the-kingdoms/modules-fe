const style = {
  basic:
    "w-[24px] h-[24px] bg-[url('/icon/selections/checkBox-b-x.svg')] checked:bg-[url('/icon/selections/checkBox-b-o.svg')]",
  round:
    "w-[24px] h-[24px] bg-[url('/icon/selections/checkBox-r-x.svg')] checked:bg-[url('/icon/selections/checkBox-r-o.svg')]",
  small:
    "w-[16px] h-[16px] bg-[url('/icon/selections/checkBox-s-x.svg')] checked:bg-[url('/icon/selections/checkBox-s-o.svg')]",
};
interface CheckboxProps {
  type?: "basic" | "round" | "small";
}

export default function Checkbox({
  type = "basic",
  ...props
}: CheckboxProps & JSX.IntrinsicElements["input"]) {
  return (
    <input
      {...props}
      type="checkbox"
      className={`appearance-none ${style[type]}`}
    />
  );
}
