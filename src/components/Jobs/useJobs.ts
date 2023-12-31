import { useEffect } from "react";

const useJobs = ({ highLighter }: IUseJobs) => {
  const switchTab = (event: React.MouseEvent, tabName: string): void => {
    event.preventDefault();
    const tabcontent: HTMLCollectionOf<Element> = document.getElementsByClassName("tabcontent");
    Array.from(tabcontent).forEach((element: Element) => {
      (element as HTMLElement).style.display = "none";
    });

    const tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tab-jobs-links");
    Array.from(tablinks).forEach((element: Element) => {
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
  const jobs = [
    {
      id: 'Fmx1',
      job: {
        position: 'position',
        link: 'link',
        company: 'company',
        description: new Array(2).fill('description'),
        technologies: new Array(4).fill('technologies'),
        period: 'period'
      }
    },
    {
      id: 'Nelogica',
      job: {
        position: 'position',
        link: 'link',
        company: 'company',
        description: new Array(4).fill('description'),
        technologies: new Array(4).fill('technologies'),
        period: 'period'
      }
    },
    {
      id: 'Fmx2',
      job: {
        position: 'position',
        link: 'link',
        company: 'company',
        description: new Array(3).fill('description'),
        technologies: new Array(4).fill('technologies'),
        period: 'period'
      }
    }
  ]
  useEffect(() => {
    document.getElementById("tabJob0")?.click();
  }, []);

  return { switchTab, allTabs, jobs };
};

export default useJobs;