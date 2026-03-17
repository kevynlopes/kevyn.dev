import Image from "next/image";
import advanzzze from "../../public/images/LogoOffWhite.svg";

export default function Footer() {
  return (
    <footer className="flex justify-between px-120 text-secondary border-t border-neutral-600 p-8 mt-40">
      <div>© 2026 Kevyn Lopes</div>
      <div className="flex items-center gap-2">
        Advanzzze
        <Image src={advanzzze} alt="Logo Advanzzze" width={20} />
      </div>
    </footer>
  );
}
