import React, { FC } from "react";

interface SectionHeaderProps {
  children?: React.ReactNode;
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mt-8 flex">
      <p className="text-xl font-semibold text-emerald-600">{title}</p>

      <div className="bg-emerald-600 h-1 flex-1 self-end ml-8 mb-1.5" />
    </div>
  );
};

export default SectionHeader;
