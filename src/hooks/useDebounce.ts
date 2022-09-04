import { useCallback, useEffect, useRef } from 'react';

export function useDebounce(delay): [(listener: () => unknown, forcedDelay?: number) => void, () => void] {
  const timeoutRef = useRef<number>();

  const debounce = useCallback(
    (listener: () => unknown, forcedDelay?: number) => {
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
