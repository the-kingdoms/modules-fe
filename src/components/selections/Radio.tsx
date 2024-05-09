export default function Radio({ ...props }: JSX.IntrinsicElements["input"]) {
  return (
    <input
      {...props}
      type="radio"
      className="appearance-none rounded-full w-[24px] h-[24px] border border-4 border-Gray2
      checked:border-black hover:border-black"
    />
  );
}
