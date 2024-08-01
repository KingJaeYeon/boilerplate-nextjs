import { useEffect, useRef } from "react";

export default function useDebouncedEffect<T extends (...args: any[]) => void>({
  effect,
  deps = [],
  delay = 200,
}: {
  effect: T;
  deps?: any[];
  delay?: number;
}) {
  const callback = useRef<T | null>();

  useEffect(() => {
    callback.current = effect;
  }, [effect]);

  useEffect(() => {
    const handler = () => {
      if (callback.current) {
        callback.current();
      }
    };

    if (deps.length > 0) {
      const timer = setTimeout(handler, delay);
      return () => clearTimeout(timer);
    }
  }, [...deps, delay]);
}
