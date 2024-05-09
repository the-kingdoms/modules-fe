export default function Divider({ height = 1 }: { height?: number }) {
  return (
    <div
      className="border-t border-Gray2 bg-Gray1 w-full"
      style={{ height: `${height}px` }}
    />
  );
}
