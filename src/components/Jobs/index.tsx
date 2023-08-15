import { useRef } from "react";
import Title from "../shared/Title";
import useJobs from "./useJobs";
import Content from "./Content";

const Experience = () => {
  const defaulOpen = useRef<HTMLButtonElement>(null);
  const highLighter = useRef<HTMLDivElement>(null);
  const { switchTab, allTabs, jobs } = useJobs({ defaulOpen, highLighter });
  
  return (
    <section data-aos="fade-up"
      data-aos-duration='1500'
      className="w-full max-w-[900px] ml-auto mr-32 py-28" id="experience">
      <Title title="experience"/>
      <div className="grid grid-cols-1/4 gap-8 mt-12">
        <div className="tab-jobs border-l-2 border-gray-800 w-max h-fit relative flex flex-col items-start justify-start">
          {allTabs.map((tab, index) => (
            <button role="tab" id={`tabJob${index}`} tabIndex={index} key={index} onClick={(e) => switchTab(e, tab.name)}
              className="tab-jobs-links h-10 px-6 hover:bg-gray-800 w-full text-left transition-all text-sm font-light hover:text-teal-300">
              {tab.label}
            </button>
          ))}
          <div ref={highLighter} className="h-10 w-[2px] bg-teal-500 top-0 -left-[2px] absolute z-10 high-lighter"/>
        </div>
        <Content jobs={jobs}/>
      </div>
    </section>
  )
}

export default Experience;