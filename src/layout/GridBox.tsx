interface Props {
  className?: string;
  col?: 1 | 2;
  children: React.ReactNode;
}

export default function GridBox({ className, col, children }: Props) {
  return (
    <div
      className={`grid items-center ${
        col === 1 ? "grid-cols-1" : "grid-cols-2"
      } ${className}`}
    >
      {children}
    </div>
  );
}
