import React from 'react';

const Upbutton = () => {
	return (
		<div className="up" 
      onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
      <div>up</div>  
    </div>   
  )
}



export default Upbutton;