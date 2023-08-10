const useResumeButton = () => {
  const openResume = () => {
    window.open('../../../public/assets/resume.pdf', '_blank');
  };

  const variants = {
    primary: 'border-teal-300 text-teal-300 hover:border-transparent hover:text-gray-800 hover:bg-teal-300',
    secondary: 'border-gray-900 text-gray-900 hover:border-transparent',
  };

  return { openResume, variants };
};

export default useResumeButton;