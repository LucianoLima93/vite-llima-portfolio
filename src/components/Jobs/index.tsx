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
      className="w-full max-w-[900px] ml-auto lg:mr-32 mr-auto py-28 px-5" id="experience">
      <Title title="experience"/>
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
    </section>
  )
}

export default Experience;