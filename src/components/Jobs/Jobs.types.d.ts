interface IUseJobs {
  defaulOpen?: RefObject<HTMLButtonElement>;
  highLighter?: RefObject<HTMLDivElement>;
};

interface ITab {
  label: string;
  name: string;
}

interface IJob {
  position: string;
  link: string;
  company: string;
  description: Array<string>;
  technologies: Array<string>;
  period: string;
}
interface IContentItem {
  id?: string;
  job: IJob;
  index?: number;
}
interface IContent {
  jobs: Array<IContentItem>;
}