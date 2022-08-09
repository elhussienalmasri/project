import {
  useState,
  useEffect,
} from 'react';

// interface Hooks {
//   time: Date;
// }

const useHooks = () => {
  const [time, setTime] = useState(
    new Date()
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date());
    }, 1 * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return { time };
};

export default useHooks;
