import React from 'react';


import Hand from '../Hand';

import styles from './SecondsHand.module.css';



const SecondsHand = ({
  second,
}) => {
  return (
    <Hand value={second} base={60}>
      <div
        className={styles.SecondsHand}
      />
    </Hand>
  );
};

export default SecondsHand;
