"use client";

import { RiSunFill } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import advanzzze from "../../public/images/LogoOffWhite.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-6 left-1/2 z-50 -translate-x-1/2 w-full px-4 absolute">
      <nav className="relative mx-auto flex w-full max-w-132 items-center justify-between rounded-4xl border border-neutral-900 bg-tertiary px-6 py-2 text-neutral-600">
        <button className="flex items-center gap-2 cursor-pointer border-r border-neutral-600 pr-6">
          <Image alt="Logo" src={advanzzze} width={20} />
          <div className="font-bold">
            Kevyn<span>.</span>dev
          </div>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-secondary sm:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <IoClose size={26} /> : <GiHamburgerMenu size={22} />}
        </button>

        <ul className="hidden items-center gap-4 font-mono sm:flex">
          <li className="cursor-pointer rounded-4xl px-2 py-1 duration-300 ease-in hover:bg-neutral-900 hover:text-secondary">
            <Link href="#about">About</Link>
          </li>
          <li className="cursor-pointer rounded-4xl px-2 py-1 duration-300 ease-in hover:bg-neutral-900 hover:text-secondary">
            Work
          </li>
          <li className="cursor-pointer rounded-4xl px-2 py-1 duration-300 ease-in hover:bg-neutral-900 hover:text-secondary">
            Stack
          </li>
          <li className="cursor-pointer rounded-4xl px-2 py-1 duration-300 ease-in hover:bg-neutral-900 hover:text-secondary">
            Contact
          </li>

          <RiSunFill className="text-secondary text-xl hover:text-neutral-300 cursor-pointer" />
        </ul>

        {menuOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 w-full rounded-3xl border border-neutral-900 bg-tertiary p-4 shadow-lg sm:hidden">
            <ul className="flex flex-col gap-2 font-mono">
              <li className="cursor-pointer rounded-2xl px-3 py-2 duration-300 hover:bg-neutral-900 hover:text-secondary">
                About
              </li>
              <li className="cursor-pointer rounded-2xl px-3 py-2 duration-300 hover:bg-neutral-900 hover:text-secondary">
                Work
              </li>
              <li className="cursor-pointer rounded-2xl px-3 py-2 duration-300 hover:bg-neutral-900 hover:text-secondary">
                Stack
              </li>
              <li className="cursor-pointer rounded-2xl px-3 py-2 duration-300 hover:bg-neutral-900 hover:text-secondary">
                Contact
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
