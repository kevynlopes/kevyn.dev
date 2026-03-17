import SocialCard from "./SocialCard";
import TextUnderline from "./TextUnderline";
import Timer from "./Timer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div>
      <div className="container mx-auto  h-screen max-sm:px-8">
        <div className="text-9xl font-bold pt-40 max-xl:text-8xl max-sm:text-6xl text-transparent bg-clip-text bg-[url('/images/scratch.png')] bg-secondary">
          Kevyn Lopes
        </div>
        <div className="text-9xl font-bold max-xl:text-8xl max-sm:text-6xl text-transparent bg-clip-text bg-[url('/images/scratch.png')] bg-neutral-300">
          Engenheiro de Software<span className="text-secondary">.</span>
        </div>

        <div className="max-w-prose text-3xl font-normal text-neutral-600 max-sm:text-xl max-md:text-2xl">
          Construo produtos digitais completos, do{" "}
          <span className="relative">
            <TextUnderline />
            front-end
          </span>{" "}
          ao{" "}
          <span className="relative">
            <TextUnderline />
            back-end
          </span>
          , com foco em performance, escalabilidade e experiências que geram
          resultado.
        </div>

        <div className="flex gap-6 mt-4">
          <SocialCard icon={FaGithub} text="Github" />
          <SocialCard
            className="hover:text-[#0b66c3]"
            icon={FaLinkedin}
            text="LinkedIn"
          />
        </div>

        <div className="hidden bottom-30 -right-20 text-lg text-neutral-600 font-light rotate-90 md:block fixed">
          local time: <Timer />
        </div>
      </div>
    </div>
  );
}
