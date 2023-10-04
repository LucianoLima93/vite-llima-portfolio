import { twMerge } from "tailwind-merge";
import Title from "../Title";

const SectionWrapper:React.FC<ISectionWrapperProps> = ({title, oddEven, ...rest}) => {
  return (
    <section
    {...rest}
    data-aos="fade-up"
    data-aos-duration='1500'
    className={twMerge(`w-full max-w-[900px] py-6 px-5 md:py-12 ${oddEven === 'odd' ? 'mx-auto' : 'ml-auto lg:mr-32 mr-auto'}`, rest.className)}>
      {title && <Title title={title} />}
      {rest.children}
    </section>
  )
}

export default SectionWrapper