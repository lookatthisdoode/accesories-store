import React from 'react';

const Landing = () => {

	return (
		<div className="landing">
			<ul className="menu landing_nav ">
        <li>About</li>
        <li onClick={() => window.scrollTo(0,1100)}>Shop</li>
    	</ul>
			<div className="landing_logo">
				Vitalina
			</div>
			<p className="landing_paragraph">
			 	custom accesories brand from Ukraine made by talented ukranian artist with passion of making beautiful things
			</p>
		</div>        
  )

}



export default Landing;