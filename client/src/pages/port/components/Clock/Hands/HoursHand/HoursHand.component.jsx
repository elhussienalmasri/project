import React from 'react';


import Hand from '../Hand';

import styles from './HoursHand.module.css';



const HoursHand= ({
  hour,
}) => {
  return (
    <Hand
      value={
        hour > 12 ? hour - 12 : hour
      }
      base={12}
    >
      <div
        className={styles.HoursHand}
      />
    </Hand>
  );
};

export default HoursHand;
