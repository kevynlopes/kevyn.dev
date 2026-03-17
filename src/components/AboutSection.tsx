import Image from "next/image";
import Stacks from "./Stacks";
import TitleTab from "./TitleTab";
import Collage from "./Collage";

export default function AboutSection() {
  return (
    <div id="about" className="mx-auto container relative max-sm:p-8">
      <TitleTab title="About" number="01" />

      <div className="text-4xl text-secondary mt-7">OLÁ</div>
      <div className="flex gap-32 max-sm:flex-col">
        <div>
          <div className="text-lg max-sm:text-lg text-secondary max-sm:w-100 font-light flex-1">
            Sou um desenvolvedor web full stack com experiência na criação de
            aplicações modernas, escaláveis e performáticas. Atuo no
            desenvolvimento de interfaces com React, Next.js e TypeScript, além
            de construir APIs e soluções robustas no back-end com Node.js e C#.
            Tenho experiência com arquitetura de software, boas práticas como
            Clean Code, SOLID, POO e DDD, sempre buscando entregar produtos bem
            estruturados, eficientes e focados em gerar resultado.
          </div>
          <div>
            <div className="text-secondary text-4xl mb-2 mt-14">
              Formação Acadêmica
            </div>

            <Collage
              collage="GRAN"
              descriptionCurse="Bacharelado, Ciência da Computação "
              date="fev de 2026 - fev 2030"
            />
          </div>
        </div>
        <div>
          <div className="text-secondary text-4xl w-96 mb-2">Stacks</div>
          <Stacks />
        </div>
      </div>
    </div>
  );
}
