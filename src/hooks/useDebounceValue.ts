import {useEffect, useState} from 'react';

export const useDebouncedValue = (
  value: string | undefined = undefined,
  time: number = 500,
) => {
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof value === 'string' && value.length >= 3) {
        setDebouncedValue(value);
        return;
      }

      if (typeof value === 'string' && value.length <= 2) {
        setDebouncedValue(undefined);
      }
    }, time);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {debouncedValue};
};
