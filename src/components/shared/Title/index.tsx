import { useTranslation } from "react-i18next"

interface ITitleProps {
  title: string;
}

const Title:React.FC<ITitleProps> = ({title}) => {
  const { t } = useTranslation();

  return (
    <h2 className={`flex items-baseline relative mx-0 mt-2 whitespace-nowrap w-full text-3xl font-semibold text-gray-50
      before:before-counter-increment after:after-numbered-heading`}>
      {t(`titles.${title}`)}
    </h2>
  )
}

export default Title