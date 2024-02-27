import SectionHeader from "./SectionHeader";

const Certifications = () => {
  return (
    <>
      <SectionHeader title="Certifications" />
      <div className="mt-2">
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            <p className="font-semibold text-lg">TOEIC</p>
            <p>Total Score: 900</p>
            <p>Awarded by the Educational Testing Service (ETS).</p>
          </div>

          <p className="italic">2019</p>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            <p className="font-semibold text-lg">Degree of Engineer</p>
            <p>Major in Electronic and Telecommunication Engineering</p>
            <p>
              Awarded by the Posts and Telecommunications Institute of
              Technology (PTIT).
            </p>
          </div>

          <p className="italic">2014 - 2019</p>
        </div>
      </div>
    </>
  );
};

export default Certifications;
