import { useLayoutEffect, useRef } from "react";

export const useDimensions = (ref?:React.MutableRefObject<HTMLElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useLayoutEffect(() => {
    dimensions.current.width = ref?.current.offsetWidth || 0;
    dimensions.current.height = ref?.current.offsetHeight || 0;
  }, []);

  return dimensions.current;
};
