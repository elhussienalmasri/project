import React from 'react';


import SecondsHand from './SecondsHand';
import MinutesHand from './MinutesHand';
import HoursHand from './HoursHand';

import styles from './Hands.module.css';



const Hands = ({ time }) => {
  return (
    <div className={styles.Container}>
      <SecondsHand
        second={time.getSeconds()}
      />
      <MinutesHand
        minute={time.getMinutes()}
      />
      <HoursHand
        hour={time.getHours()}
      />
    </div>
  );
};

export default Hands;
