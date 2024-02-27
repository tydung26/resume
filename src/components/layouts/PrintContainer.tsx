import React, { FC } from "react";

interface PrintContainerProps {
  children: React.ReactNode;
}

const PrintContainer: FC<PrintContainerProps> = ({ children }) => {
  return (
    <div className="m-4 h-[297mm] w-[210mm] overflow-hidden rounded-md bg-white shadow-lg print:m-0 print:h-full print:w-screen print:rounded-none print:shadow-none">
      {children}
    </div>
  );
};

export default PrintContainer;
