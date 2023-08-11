import { useState } from "react";
import Title from "../shared/Title";

interface ITab {
  label: string;
}

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState([0]);
  const allTabs: ITab[] = [
    {
      label: "FMX Soluções em TI",
    },
    {
      label: "Nelogica",
    },
    {
      label: "FMX Soluções em TI",
    },
  ];

  return (
    <section className="mt-48 flex flex-col gap-8" id="jobs">
      <Title title="experience"/>
      <div className="border-l-2 border-gray-800 w-max relative flex flex-col items-start justify-start">
        <button className="h-10 px-6 hover:bg-gray-800 active:bg-gray-800 w-full text-left transition-all text-sm font-light hover:text-teal-300 active:text-teal-300">FMX Soluções em TI</button>
        <button className="h-10 px-6 hover:bg-gray-800 active:bg-gray-800 w-full text-left transition-all text-sm font-light hover:text-teal-300 active:text-teal-300">Nelogica</button>
        <button className="h-10 px-6 hover:bg-gray-800 active:bg-gray-800 w-full text-left transition-all text-sm font-light hover:text-teal-300 active:text-teal-300">FMX Soluções em TI</button>
        <div className="h-10 w-[2px] bg-teal-500 top-0 -left-[2px] absolute z-10"/>
      </div>
    </section>
  )
}

export default Experience;