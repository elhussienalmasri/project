import React from 'react';



import Hands from './Hands';
import Numbers from './Numbers';
import OuterRim from './OuterRim';

import useHooks from './App.hooks';

const Clock = () => {
  const { time } = useHooks();

  return (
    <>
      
      <main style={{display:'flex',
      justifyContent:'center',
      alignItems:'center',
      paddingTop:'20vh',
      // backgroundColor:'#000016'
      }}>
        <OuterRim>
          <Numbers />
          <Hands time={time} />
        </OuterRim>
      </main>
    </>
  );
};

export default Clock;
