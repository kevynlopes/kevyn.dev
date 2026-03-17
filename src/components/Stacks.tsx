import StacksCards from "./StacksCard";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaNode, FaDocker } from "react-icons/fa";

export default function Stacks() {
  return (
    <div className="flex flex-col gap-2">
      <StacksCards color="#54D0F5" icon={FaReact} name="React" />
      <StacksCards color="#6E18E8" icon={TbBrandCSharp} name="C#" />
      <StacksCards color="#2F74BF" icon={SiTypescript} name="TypeScript" />
      <StacksCards color="#5DAE47" icon={FaNode} name="Node" />
      <StacksCards color="#FAFAFA" icon={FaDocker} name="Docker" />
    </div>
  );
}
