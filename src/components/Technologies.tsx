import SectionHeader from "./SectionHeader";
import { technologies } from "../data/technologies";

const Technologies = () => {
  return (
    <>
      <SectionHeader title="Technologies" />

      <div className="mt-4 grid grid-cols-5 gap-4">
        {technologies.map((it) => (
          <div className="flex col-span-1" key={it.name}>
            <img src={it.img} alt={it.name} className="inline h-6 w-6 mr-1" />

            <p>{it.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;
