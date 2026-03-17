import Image from "next/image";
import GranFaculdade from "../../public/images/collage/gran-faculdade.jpg";

type Props = {
  collage: string;
  date: string;
  descriptionCurse: string;
};

export default function Collage({ collage, date, descriptionCurse }: Props) {
  return (
    <div className="text-secondary flex gap-2 items-start">
      <Image width={40} height={40} src={GranFaculdade} alt="logo-faculdade" />
      <div>
        <div className="font-bold">{collage}</div>
        <p className="font-light">{descriptionCurse}</p>
        <span className="text-neutral-600 font-light">{date}</span>
      </div>
    </div>
  );
}
