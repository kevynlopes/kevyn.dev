import Image from "next/image";
import advanzzze from "../../public/images/LogoOffWhite.svg";

export default function Footer() {
  return (
    <footer className="max-sm:flex-col max-sm:items-center flex justify-around text-secondary border-t border-neutral-600 max-sm:p-4 p-8 mt-40">
      <div>© 2026 Kevyn Lopes</div>
      <div className="flex items-center gap-2">
        Advanzzze
        <Image src={advanzzze} alt="Logo Advanzzze" width={20} />
      </div>
    </footer>
  );
}
