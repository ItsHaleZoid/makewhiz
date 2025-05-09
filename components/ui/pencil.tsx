import Image from "next/image";

export default function Pencil() {
  return (
    <div
      style={{
        filter: "drop-shadow(8px 12px 10px rgba(80, 0, 120, 0.18)) drop-shadow(0px 2px 0px rgba(0,0,0,0.10))",
        display: "inline-block",
      }}
    >
      <Image src="/pencil.png" alt="Pencil" width={200} height={200} />
    </div>
  );
}
