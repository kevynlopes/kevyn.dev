import TextUnderline from "./TextUnderline";
import TitleTab from "./TitleTab";

export default function AboutSection() {
  return (
    <div id="about" className="mx-auto container relative">
      <TitleTab title="About" number="01" />

      <div className="text-4xl text-secondary mt-7">OLÁ</div>
      <div className="text-lg text-neutral-600 w-200 font-light">
        Sou um desenvolvedor web full stack com experiência na criação de
        aplicações modernas, escaláveis e performáticas. Atuo no desenvolvimento
        de interfaces com React, Next.js e TypeScript, além de construir APIs e
        soluções robustas no back-end com Node.js e C#. Tenho experiência com
        arquitetura de software, boas práticas como Clean Code, SOLID, POO e
        DDD, sempre buscando entregar produtos bem estruturados, eficientes e
        focados em gerar resultado.
      </div>
    </div>
  );
}
