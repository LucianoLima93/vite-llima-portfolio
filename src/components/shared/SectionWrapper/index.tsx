import { twMerge } from "tailwind-merge";
import Title from "../Title";

interface ISectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const SectionWrapper:React.FC<ISectionWrapperProps> = ({title, ...rest}) => {
  return (
    <section
    {...rest}
    data-aos="fade-up"
    data-aos-duration='1500'
    className={twMerge('w-full max-w-[900px]', rest.className)}>
      {title && <Title title={title} />}
      {rest.children}
    </section>
  )
}

export default SectionWrapper