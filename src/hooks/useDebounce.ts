import { useCallback, useEffect, useRef } from 'react';

type DebounceFunction = (listener: () => unknown, forcedDelay?: number) => void;

export function useDebounce(delay: number): [DebounceFunction, () => void] {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debounce = useCallback<DebounceFunction>(
    (listener, forcedDelay) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(listener, forcedDelay || delay);
    },
    [delay],
  );

  const clearDebounce = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [debounce, clearDebounce];
}
