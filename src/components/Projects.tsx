import { FC } from "react";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";

interface BulletPointProps {
  title: string;
  detail: string;
}

const BulletPoint: FC<BulletPointProps> = ({ detail, title }) => {
  return (
    <div>
      <span className="text-xl text-emerald-600 mr-2">&#x2022;</span>

      <span className="font-semibold">{title}: </span>
      <span>{detail}</span>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <SectionHeader title="Projects" />
      <>
        {projects.map((it) => (
          <div className={"mt-4"} key={it.name}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg text-emerald-600">
                  {it.name}
                </p>
                <p className="italic">{`${it.company} - Teamsize: ${it.teamsize}`}</p>
              </div>

              <p className="italic">{it.time}</p>
            </div>

            <div>
              <BulletPoint title="Description" detail={it.description} />

              <BulletPoint title="Technologies" detail={it.technologies} />

              <BulletPoint title="Role" detail={it.role} />

              <BulletPoint title="Achievements" detail={it.achievements} />
            </div>
          </div>
        ))}
      </>
    </>
  );
};

export default Projects;
