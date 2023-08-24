import { useRef } from "react";
import useJobs from "./useJobs";
import Content from "./Content";
import SectionWrapper from "../shared/SectionWrapper";

const Experience = () => {
  const defaulOpen = useRef<HTMLButtonElement>(null);
  const highLighter = useRef<HTMLDivElement>(null);
  const { switchTab, allTabs, jobs } = useJobs({ defaulOpen, highLighter });
  
  return (
    <SectionWrapper id="experience" title="experience" oddEven="even">
      <div className="xl:grid xl:grid-cols-1/4 flex flex-col gap-8 mt-12">
        <div className={`tab-jobs border-l-2 dark:border-gray-800 md:w-max h-fit w-full
          relative md:overflow-auto overflow-scroll overflow-y-hidden flex xl:flex-col items-start justify-start`}>
          {allTabs.map((tab, index) => (
            <button role="tab" id={`tabJob${index}`} tabIndex={index} key={index} onClick={(e) => switchTab(e, tab.name)}
              className={`tab-jobs-links whitespace-nowrap h-10 px-6 dark:hover:bg-gray-800 hover:bg-gray-200 text-sm dark:hover:text-teal-300
              hover:text-teal-500 w-full text-left transition-all`}>
              {tab.label}
            </button>
          ))}
          <div ref={highLighter} className="h-10 w-[2px] bg-teal-500 dark:bg-teal-300 top-0 -left-[2px] absolute z-10 high-lighter"/>
        </div>
        <Content jobs={jobs}/>
      </div>
    </SectionWrapper>
  )
}

export default Experience;