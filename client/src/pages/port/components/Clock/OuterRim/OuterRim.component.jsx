import React from 'react';


import styles from './OuterRim.module.css';

const OuterRim = ({ children }) => {
  return (
    <div className={styles.OuterRim}>
      {children}
    </div>
  );
};

export default OuterRim;
