import React from 'react';

const Landing = () => {

	return (
		<div className="landing">
			<ul className="menu landing_nav ">
        <li>About</li>
        <li onClick={() => window.scrollTo({top: (window.screen.height), behavior: 'smooth'})}>Bracelettes</li>
        <li onClick={() => window.scrollTo({top: 3196, behavior: 'smooth'})}>Necklaces</li>
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