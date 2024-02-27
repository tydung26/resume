import SectionHeader from "./SectionHeader";

const Certifications = () => {
  return (
    <>
      <SectionHeader title="Certifications" />
      <div className="mt-2">
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-semibold text-lg">TOEIC</p>
            <p>Total Score: 900</p>
          </div>

          <p className="italic">2019</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="font-semibold text-lg">DEGREE OF ENGINEER</p>
            <p>Major: Electronic and telecommunication engineering</p>
          </div>

          <p className="italic">2014 - 2019</p>
        </div>
      </div>
    </>
  );
};

export default Certifications;
