import Image from "next/image";

type MakewhizWhiteProps = {
  size?: number;
  className?: string;
};

export default function MakewhizWhite({ size = 100, className = "" }: MakewhizWhiteProps) {
  // We'll use a wrapper div with overflow-hidden and crop 3px from each side using negative margins and a larger image size.
  // The image will be rendered at (size + 6) and shifted -3px left and up, so only the center (cropped) is visible.
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        overflow: "hidden",
        display: "inline-block",
        position: "relative",
      }}
    >
      <Image
        src="/makewhiz-icon-white.png"
        alt="MakewhizWhite"
        width={size + 6}
        height={size + 6}
        style={{
          position: "absolute",
          top: -3,
          left: -3,
          width: size + 6,
          height: size + 6,
          objectFit: "cover",
        }}
        draggable={false}
      />
    </div>
  );
}