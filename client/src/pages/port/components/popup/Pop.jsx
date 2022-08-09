import React from 'react';
import './Styles.css'

const Pop = (props) => {
  return (
    <div className="popup" id="popup">
        <h2> Thank You!</h2>
        <p>Your details has been successfully submitted Thanks!</p>
        <button type="button" onClick={props.func} >OK</button>
    </div>
  )
}

export default Pop