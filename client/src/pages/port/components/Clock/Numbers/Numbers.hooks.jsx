

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';

const useHooks = ()=> {
  const [width, setWidth] = useState(0);

  const inputRef = useRef() 

  // const container = useRef{ HTMLDivElement || null}(
  //   null
  // );

  const handleResize = useCallback(() => {
    if (!inputRef .current) return;
    setWidth(
      inputRef .current.offsetWidth
    );
  }, [inputRef ]);

  useEffect(() => {
    window.addEventListener(
      'resize',
      handleResize
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, [handleResize]);

  useLayoutEffect(() => {
    if (!inputRef .current) return;
    handleResize();
  }, [inputRef , handleResize]);

  return { width, inputRef  };
};

export default useHooks;
