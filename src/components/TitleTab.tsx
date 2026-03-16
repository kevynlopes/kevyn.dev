type Props = {
  title: string;
  number: string;
};

export default function TitleTab({ title, number }: Props) {
  return (
    <>
      <div className="inline-block">
        <h2 className="text-2xl text-secondary font-extralight">
          <span className="text-neutral-600">{number} /</span> {title}
        </h2>
      </div>
      <div className="bg-neutral-600 h-0.5 w-full mt-4"></div>
    </>
  );
}
