import { useTranslation } from "react-i18next"

interface ITitleProps {
  index: number | string;
  title: string;
}

const Title:React.FC<ITitleProps> = ({index, title}) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-baseline justify-start gap-2">
      <span className="block text-2xl text-teal-300 font-semibold">{index}</span>
      <h2 className='text-3xl font-semibold text-gray-50 w-fit'>{t(`titles.${title}`)}</h2>
      <div className="w-full h-[1px] bg-gray-500"/>
    </div>
  )
}

export default Title