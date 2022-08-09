import React from 'react';


import Hand from '../Hand';

import styles from './MinutesHand.module.css';



const MinutesHand = ({
  minute,
}) => {
  return (
    <Hand value={minute} base={60}>
      <div
        className={styles.MinutesHand}
      />
    </Hand>
  );
};

export default MinutesHand;
