import type { IconType } from "react-icons";

type Props = {
  text: string;
  icon: IconType;
  className?: string;
};

export default function SocialCard({ text, icon: Icon, className }: Props) {
  return (
    <div className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-neutral-700 bg-black/45 px-4 py-2 text-sm text-secondary transition duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-neutral-900">
      <Icon className={className} />
      <div>{text}</div>
    </div>
  );
}
