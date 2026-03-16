import Image from "next/image";
import type { IconType } from "react-icons";

type Props = {
  text: string;
  icon: IconType;
  className?: string;
};

export default function SocialCard({ text, icon: Icon, className }: Props) {
  return (
    <div className="text-secondary inline-flex items-center gap-2 border-r-4 border-t border-b-2 px-2 py-1 rounded-2xl hover:scale-x-110 hover:bg-neutral-900 cursor-pointer">
      <Icon className={className} />
      <div>{text}</div>
    </div>
  );
}
