import React from "react";

const GlobalHeader = ({ title }) => {
  return (
    <header className="w-full h-[72px] px-6 py-2.5 bg-gradient-to-r from-[#4254b8] to-[#0f1f79] justify-around items-center flex">
      <div className="text-white text-2xl font-semibold font-['Inter'] leading-[28.80px]">
        {title}
      </div>
    </header>
  );
};

export default GlobalHeader;
