import { useLayoutEffect, useRef } from "react";

export const useDimensions = (ref?:React.MutableRefObject<any>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useLayoutEffect(() => {
    dimensions.current.width = ref?.current.offsetWidth;
    dimensions.current.height = ref?.current.offsetHeight;
  }, []);

  return dimensions.current;
};
