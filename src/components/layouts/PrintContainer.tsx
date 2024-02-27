import React, { FC } from "react";

interface PrintContainerProps {
  children: React.ReactNode;
}

const PrintContainer: FC<PrintContainerProps> = ({ children }) => {
  // add this heith to simulate A4 size
  // h-[297mm]

  return (
    <div className="m-4 w-[210mm] overflow-hidden rounded-md bg-white shadow-lg print:m-0 print:h-full print:w-screen print:rounded-none print:shadow-none">
      {children}
    </div>
  );
};

export default PrintContainer;
