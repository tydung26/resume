import { experiences } from "../data/experience";
import { classNames } from "../utils/taildwind";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  return (
    <>
      <SectionHeader title="Professional Experience" />
      <div>
        {experiences.map((it, index) => (
          <div className={classNames("mt-8")} key={index}>
            <div className="flex items-center justify-between">
              <div className="font-semibold text-lg">
                <p className="text-emerald-600">{it.company}</p>
                <p>{it.position}</p>
              </div>

              <p className="italic">{it.time}</p>
            </div>

            <div>
              {it.works.map((it) => (
                <div key={it}>
                  <span className="text-xl text-emerald-600 mr-2">
                    &#x2022;
                  </span>
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
