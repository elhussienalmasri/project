import React from 'react';
import style from './style.module.css';

export default function LoadingSpinner() {
  return (
    <div className={style.spinner}>
      <div className={style.loading} />
    </div>
  );
}
