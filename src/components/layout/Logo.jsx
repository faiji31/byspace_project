import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <Image
        src="/assets/logo.png"
        alt="ByteSpace"
        width={28}
        height={28}
      />

      <span className="text-lg font-bold text-white">
        ByteSpace
      </span>
    </Link>
  );
}