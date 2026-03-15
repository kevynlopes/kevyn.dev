import Image from "next/image";
import advanzzze from "../../public/images/LogoOffWhite.svg";

export default function Header() {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-0">
      <nav className="flex justify-around bg-tertiary w-125 mt-10 px-8 py-4 rounded-4xl border-neutral-900 border text-neutral-600">
        <button className="flex items-center gap-2 cursor-pointer border-r border-neutral-600 pr-4">
          <Image alt="Logo" src={advanzzze} width={20} />
          <div className="font-bold">
            Kevyn<span>.</span>dev
          </div>
        </button>

        <ul className="flex gap-4 font-mono *:hover:bg-neutral-900 *:hover:text-secondary *:px-2 *:py-1 *:rounded-4xl *:duration-300 *:ease-in cursor-pointer">
          <li>About</li>
          <li>Work</li>
          <li>Stack</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
