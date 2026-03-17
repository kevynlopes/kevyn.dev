import Image from "next/image";

export type WorkFunctions = {
  title: string;
  date: string;
  description: string;
};

type Props = {
  image: string;
  title: string;
  companyName: string;
  time: string;
  job?: WorkFunctions[];
};

export default function WorkCard({
  image,
  title,
  companyName,
  job,
  time,
}: Props) {
  return (
    <div>
      <div className="flex items-start gap-2 text-secondary mt-10">
        <img className="w-12 h-12" alt="logo" src={image} />
        <div>
          <div className="font-bold">{companyName}</div>
          <div className="font-light">{title}</div>
          <div className="text-neutral-600 font-light mb-4">{time}</div>
          {job?.map((job, index) => (
            <div
              key={index}
              className="flex flex-col relative ml-6 mb-4 max-sm:-ml-12"
            >
              <div>{job.title}</div>
              <div className="text-sm text-neutral-600">{job.date}</div>

              <div className="text-secondary font-light w-150 max-sm:w-90 ">
                {job.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
