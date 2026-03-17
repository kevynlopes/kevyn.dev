import type { IconType } from "react-icons";

type Stack = {
  color: string;
  name: string;
  icon: IconType;
};

export default function StacksCards({ color, name, icon: Icon }: Stack) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border-dotted odd:border-secondary even:border-neutral-600 border-2">
      <Icon style={{ color: color }} />
      <div className="text-secondary">{name}</div>
    </div>
  );
}
