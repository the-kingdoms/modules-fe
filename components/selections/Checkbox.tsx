const style = {
  black: {
    basic:
      "bg-[url('/icon/selections/checkBox-black-basic-x.svg')] checked:bg-[url('/icon/selections/checkBox-black-basic-o.svg')]",
    round:
      "bg-[url('/icon/selections/checkBox-black-round-x.svg')] checked:bg-[url('/icon/selections/checkBox-black-round-o.svg')]",
    square:
      "bg-[url('/icon/selections/checkBox-black-square-x.svg')] checked:bg-[url('/icon/selections/checkBox-black-square-o.svg')]",
  },
  red: {
    basic:
      "bg-[url('/icon/selections/checkBox-red-basic-x.svg')] checked:bg-[url('/icon/selections/checkBox-red-basic-o.svg')]",
    round:
      "bg-[url('/icon/selections/checkBox-red-round-x.svg')] checked:bg-[url('/icon/selections/checkBox-red-round-o.svg')]",
    square:
      "bg-[url('/icon/selections/checkBox-red-square-x.svg')] checked:bg-[url('/icon/selections/checkBox-red-square-o.svg')]",
  },
};

const sizeStyle = {
  S: "w-[16px] h-[16px]",
  L: "w-[24px] h-[24px]",
};

interface CheckboxProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "size"
  > {
  type?: "basic" | "round" | "square";
  color?: "black" | "red";
  size?: "S" | "L";
}

export default function Checkbox({
  type = "basic",
  color = "black",
  size = "L",
  ...props
}: CheckboxProps) {
  return (
    <input
      {...props}
      type="checkbox"
      className={`appearance-none bg-cover ${sizeStyle[size]} ${style[color][type]}`}
    />
  );
}
