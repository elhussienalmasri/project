import React from 'react';


 import useHooks from './Numbers.hooks';
import styles from './Numbers.module.css';
import { getPosition } from './Numbers.utils';

const Numbers= () => {
  // const inputRef = useRef() 
  const {
    width,
    inputRef,
  } = useHooks();

  const numbers = new Array(12).fill(
    null
  );

  

  return (
    <div className={styles.Positioning}>
      <div
        ref={inputRef }
        className={styles.Container}
      >
        {numbers.map((_, i) => {
          if (!inputRef.current)
            return null;

          return (
            <div
              key={i}
              className={styles.Number}
              style={getPosition(
                width,
                i + 1
              )}
            >
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Numbers;
