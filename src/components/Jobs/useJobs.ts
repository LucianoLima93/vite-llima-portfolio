import { useEffect } from "react";

const useJobs = ({defaulOpen, highLighter}:IUseJobs) => {
  const switchTab = (event:React.MouseEvent, tabName:string):void => {
    event.preventDefault();
    let tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName("tabcontent");
    Array.from(tabcontent).forEach((element:Element) => {
      (element as HTMLElement).style.display = "none";
    });

    let tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tab-jobs-links");
    Array.from(tablinks).forEach((element:Element) => {
      (element as HTMLElement).className = (element as HTMLElement).className.replace(" active-tab", "");
    });
    const tabindex = (event.currentTarget as HTMLElement).getAttribute("tabindex");
    const tabHeight = (event.currentTarget as HTMLElement).offsetHeight;
    highLighter.current?.setAttribute("style", `transform: translateY(calc(${parseInt(tabindex || '0', 10) * tabHeight}px)`);

    (document.getElementById(tabName) as HTMLElement).style.display = "block";
    (event.currentTarget as HTMLElement).className += " active-tab";
  };
  const allTabs: ITab[] = [
    {
      label: "FMX Soluções em TI",
      name: "Fmx1"
    },
    {
      label: "Nelogica",
      name: "Nelogica"
    },
    {
      label: "FMX Soluções em TI",
      name: "Fmx2"
    },
  ];

  useEffect(() => {
    document.getElementById("tabJob0")?.click();
  }, []);

  return {switchTab, allTabs};
};

export default useJobs;