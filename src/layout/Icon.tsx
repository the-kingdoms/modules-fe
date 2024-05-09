import Image from "next/image";

interface Props {
  onClick?: () => void;
  className?: string;
  src: string;
  alt?: string;
  sz?: number;
}

export default function Icon({ onClick, className, src, alt, sz }: Props) {
  return (
    <Image
      onPointerDown={onClick}
      onClick={() => {}}
      className={className}
      src={src}
      alt={alt ?? "icon"}
      width={sz ?? 16}
      height={sz ?? 16}
    />
  );
}
