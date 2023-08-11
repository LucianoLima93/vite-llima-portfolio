import { useEffect, useRef, useState } from "react";
import Title from "../shared/Title";
import useJobs from "./useJobs";
import Content from "./Content";

const Experience = () => {
  const defaulOpen = useRef<HTMLButtonElement>(null);
  const highLighter = useRef<HTMLDivElement>(null);
  const { switchTab, allTabs } = useJobs({ defaulOpen, highLighter });
  
  return (
    <section className="mt-48 flex flex-col gap-8" id="jobs">
      <Title title="experience"/>
      <div className="flex gap-8">
        <div className="tab-jobs border-l-2 border-gray-800 w-max relative flex flex-col items-start justify-start">
          {allTabs.map((tab, index) => (
            <button role="tab" id={`tabJob${index}`} tabIndex={index} key={index} onClick={(e) => switchTab(e, tab.name)}
              className="tab-jobs-links h-10 px-6 hover:bg-gray-800 w-full text-left transition-all text-sm font-light hover:text-teal-300">
              {tab.label}
            </button>
          ))}
          <div ref={highLighter} className="h-10 w-[2px] bg-teal-500 top-0 -left-[2px] absolute z-10 high-lighter"/>
        </div>
      <Content/>
      </div>
    </section>
  )
}

export default Experience;