import React, { useState } from 'react'

const Navigation = ({pos, items, toggleCart}) => {

  const [ posScroll, setPosScroll] = useState(-200)


  const updateState = () => {
    window.scrollY > 600 ? setPosScroll(0) : setPosScroll(-200)
  }


  window.addEventListener('scroll', updateState);


  return (
    <div className="navigation" style={{top: posScroll, display:'flex', flexDirection:'row', alignItems:'center'}}>
      <div className="logo">Vitalina</div>
      <div className="menu" style={{display:'flex', flexDirection:'row', alignItems:'baseline'}}>
        <div style={{
          backgroundColor:'red', 
          borderRadius: '999px', 
          width: '1.5rem', 
          height: '1.5rem', 
          display: 'flex', 
          fontSize: '0.8rem',
          justifyContent: 'center', 
          alignItems:'center',
          margin: '0px 5px'
        }}>{items}</div>
        <div onClick={toggleCart}>Cart</div>
      </div>
    </div>
  );
};


export default Navigation;
