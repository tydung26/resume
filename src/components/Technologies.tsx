import SectionHeader from "./SectionHeader";
import {
  Technology,
  backend,
  languages,
  mobile,
  others,
  web,
} from "../data/technologies";
import { FC } from "react";

interface TechCategoryProps {
  stacks: Technology[];
  title: string;
}

const TechCategory: FC<TechCategoryProps> = ({ stacks, title }) => {
  return (
    <div className={"mt-3 flex"}>
      <p className="mr-2 font-medium">{title}:</p>

      {stacks.map((it, index) => (
        <div className="flex items-center" key={it.name}>
          {index > 0 ? <p className="mr-2">, </p> : null}

          <div className="flex items-center">
            <img src={it.img} alt={it.name} className="inline h-5 w-5 mr-0.5" />

            <p>{it.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Technologies = () => {
  return (
    <>
      <SectionHeader title="Technologies" />

      {/* <div className="mt-4 grid grid-cols-5 gap-4">
        {technologies.map((it) => (
          <div className="flex col-span-1 items-center" key={it.name}>
            <img src={it.img} alt={it.name} className="inline h-5 w-5 mr-0.5" />

            <p>{it.name}</p>
          </div>
        ))}
      </div> */}

      <TechCategory title="Languages" stacks={languages} />

      <TechCategory title="Web" stacks={web} />

      <TechCategory title="Mobile" stacks={mobile} />

      <TechCategory title="Backend" stacks={backend} />

      <TechCategory title="Others" stacks={others} />
    </>
  );
};

export default Technologies;
