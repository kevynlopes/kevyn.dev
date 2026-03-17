import TitleTab from "./TitleTab";
import WorkCard, { type WorkFunctions } from "./WorkCard";

const jobBeonUp = [
  {
    title: "Analista de Infra",
    date: "2022 - 2023",
    description:
      "Monitoramento de infraestrutura e aplicações utilizando Zabbix. Atuação com AWS (EC2, S3, RDS) para suporte a ambientes em nuvem. Desenvolvimento de scripts de automação com Python e Linux. Apoio à estabilidade, performance e disponibilidade de sistemas críticos.",
  },
  {
    title: "Estágio",
    date: "2022 - 2023",
    description: "Analista de Monitoramento Zabbix",
  },
];

const jobGoStart = [
  {
    title: "Desenvolvedor Web Full Stack",
    date: "2023 - 2025",
    description:
      "Atuação no desenvolvimento de ERP e PDV desktop e web. Criação de interfaces com Vue.js, React e Electron. Desenvolvimento de funcionalidades CRUD robustas para gestão de dados. Integração com SQL Server e uso de Entity Framework. Participação em decisões técnicas e organização de arquitetura.",
  },
];

export default function WorkSection() {
  return (
    <div className="mx-auto container relative mt-60 max-sm:p-8">
      <TitleTab number="02" title="Work" />

      <WorkCard
        companyName="GoStartLab"
        image="/images/companyImages/gostartlab_logo.jpg"
        job={jobGoStart}
        title="Tempo Integral - 2 a 1 m"
        time="Araraquara, São Paulo, Brasil"
      />

      <WorkCard
        companyName="BeonUp"
        image="/images/companyImages/beonup_logo.jpg"
        job={jobBeonUp}
        title="BeOnUp - Soluções de TI em nuvem"
        time="set de 2022 - jan de 2023 | 5 meses"
      />
    </div>
  );
}
