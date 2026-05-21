import { useCallback, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T | undefined, (value: T) => void] {
  const [value, setValue] = useState<T | undefined>(() => {
    try {
      const item =
        typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStorageValue = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        }
      } catch (error) {
        console.error("localStorage error", error);
      }
    },
    [key],
  );

  return [value, setStorageValue];
}
