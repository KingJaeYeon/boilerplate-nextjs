import { useState, useEffect } from "react";
import useDebouncedEffect from "@/hooks/useDebouncedEffect";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [data, setData] = useState<any>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useDebouncedEffect({
    effect: () => {
      setData(windowSize);
    },
    deps: [windowSize],
  });

  return data;
}
