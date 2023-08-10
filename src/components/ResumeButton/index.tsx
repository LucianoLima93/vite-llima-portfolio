import useResumeButton from './useResumeButton';

const ResumeButton:React.FC<IResumeButtonProps> = ({label, variant="primary"}) => {
  const { openResume, variants } = useResumeButton();
  return (
    <button className={`${variants[variant]} border-2 rounded-md py-1 px-2 font-semibold hover:scale-110 duration-200 transition-all`}
    onClick={openResume}>{label}</button>
  )
}

export default ResumeButton;