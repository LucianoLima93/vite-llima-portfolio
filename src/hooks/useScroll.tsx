import { useCallback, useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const onScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setVisible(prevScrollY >= currentScrollY ? true : false);
    setScroll({ x: window.scrollX, y: window.scrollY });
    setPrevScrollY(currentScrollY);
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return {visible, scroll};
};

export default useScroll;
