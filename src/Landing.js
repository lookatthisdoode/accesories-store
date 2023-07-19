import React from 'react';

const Landing = (props) => {

	return (
		<div className="landing">
			<div className="landing_logo">
				Vitalina
			</div>
			<p className="landing_paragraph">
			 	custom accesories brand from Ukraine made by talented ukranian artist with passion of making beautiful things
			</p>
			<ul className="menu landing_nav">
		        <li onClick={props.scrollToBracelets}>Bracelettes</li>
		        <li onClick={props.scrollToNecklaces}>Necklaces</li>
		        <li>Earrings</li>
    		</ul>
		</div>        
  )

}



export default Landing;