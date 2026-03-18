import SocialCard from "./SocialCard";
import TextUnderline from "./TextUnderline";
import Timer from "./Timer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0)_70%)] blur-3xl" />
        <div className="absolute -right-20 top-48 h-72 w-72 rounded-full border border-neutral-800/60" />
      </div>

      <div className="container mx-auto min-h-screen px-4 pb-24 pt-40 max-sm:px-8 max-sm:pt-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_350px]">
          <div>
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-black/45 px-4 py-2 text-xs tracking-[0.2em] text-neutral-400 uppercase">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
              Disponível para novos projetos
            </div> */}

            <h1 className="mt-8 font-bold leading-[0.9] tracking-tight">
              <span className="block text-9xl bg-[url('/images/scratch.png')] bg-clip-text text-transparent bg-secondary bg-cover max-xl:text-8xl max-sm:text-7xl">
                Kevyn Lopes
              </span>
              <span className="mt-2 block text-9xl bg-[url('/images/scratch.png')] bg-clip-text text-transparent bg-neutral-300 bg-cover max-xl:text-8xl max-sm:text-4xl">
                Engenheiro de Software<span className="text-secondary">.</span>
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-2xl font-normal leading-relaxed text-neutral-400 max-sm:text-lg max-md:text-xl">
              Construo produtos digitais completos, do{" "}
              <span className="relative text-secondary">
                <TextUnderline />
                front-end
              </span>{" "}
              ao{" "}
              <span className="relative text-secondary">
                <TextUnderline />
                back-end
              </span>
              , com foco em performance, escalabilidade e experiências que geram
              resultado.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
              <span className="rounded-full border border-neutral-700 px-4 py-1.5">
                React e Next.js
              </span>
              <span className="rounded-full border border-neutral-700 px-4 py-1.5">
                Node.js e TypeScript
              </span>
              <span className="rounded-full border border-neutral-700 px-4 py-1.5">
                APIs e arquitetura escalável
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <SocialCard icon={FaGithub} text="Github" />
              <SocialCard
                className="hover:text-[#0b66c3]"
                icon={FaLinkedin}
                text="LinkedIn"
              />

              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition duration-300 hover:border-secondary hover:text-secondary"
              >
                conhecer minha trajetória
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <aside className="relative h-120 overflow-hidden rounded-3xl border border-neutral-800/80 bg-black/45 p-6 backdrop-blur-sm">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-secondary/10 blur-2xl" />

            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              agora
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-secondary">
              construindo produto com impacto real
            </h2>

            <ul className="mt-6 space-y-4 text-sm text-neutral-300">
              <li className="border-l-2 border-neutral-700 pl-3">
                Ecossistema B2B com CRM e Marketplace
              </li>
              <li className="border-l-2 border-neutral-700 pl-3">
                Interfaces responsivas com foco em conversão
              </li>
              <li className="border-l-2 border-neutral-700 pl-3">
                APIs robustas para escalar com segurança
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                local time
              </p>
              <Timer className="mt-2 block text-3xl font-semibold leading-none text-secondary" />
              {/* <p className="mt-3 text-sm text-neutral-500">
                Araraquara - SP, Brasil
              </p> */}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
