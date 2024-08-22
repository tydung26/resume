import { info } from "../data/info";
import { objective } from "../data";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Technologies from "./Technologies";
import Projects from "./Projects";

const Resume = () => {
  // break-after-page

  return (
    <div className="py-5 pl-8">
      <div className="px-10 py-5 w-full bg-emerald-600 rounded-l-full">
        <div className="flex text-white">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{info.name}</h1>
            <h3 className="text-base mt-1">{info.position}</h3>
          </div>
          <div className="flex flex-1 flex-col justify-center items-end font-light text-sm">
            <p>{info.address}</p>
            <div className="flex">
              <p>{info.phone}</p>
              <p className="px-2">|</p>
              <p>{info.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10">
        <div className="mt-8">
          <p>{objective}</p>
        </div>

        <Technologies />

        <Experience />

        <Projects />

        <Certifications />
      </div>
    </div>
  );
};

export default Resume;
