interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Slider({ className, children }: Props) {
  return (
    <div className="min-w-full">
      <div className={`flex overflow-x-scroll scroll-hide ${className}`}>
        {children}
      </div>
    </div>
  );
}
